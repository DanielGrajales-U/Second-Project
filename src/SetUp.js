import dreams from './mock/App'
import {ref, computed} from 'vue';



const dreamRef = ref([...dreams])
const dreamsIncomplete = computed(()=>dreamRef.value.filter(x => !x.complete))
const dreamsComplete = computed(()=>dreamRef.value.filter(x => x.complete))

const toggle = (id)=>{
    const dre = dreamRef.value.find(x => x.id === id);
    if(dre.complete !== undefined){
        dre.complete = !dre.complete
    }
}

const deleteDream = (id)=>{
    dreamRef.value = dreamRef.value.filter(x => x.id !==id)
}

const add = (dream)=>{
    const newDream = {id:dreamRef.value.length + 1,dream,complete:false}
    dreamRef.value.push(newDream)
}

const update = (allDreams)=>{
    dreamRef.value =allDreams 
}



const dreamMethods = ()=>({dreamsIncomplete,dreamsComplete,dreamRef,toggle,deleteDream,add,update})

export{dreamMethods};