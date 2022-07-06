import dreams from '../mock/App'

const DreamService = () =>{
    const getTodos = async ()=>{
        return new Promise(resolve =>{
            setTimeout(()=>{
                resolve(dreams)
            },2500)
        });
    };
    return {getTodos};
}

const dreamService = DreamService()

export default dreamService;