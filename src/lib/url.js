
const root= '/react-frame';

export const getPath= (path)=>{
    if(path.includes(root))
        return path;
    return root+ path;
};

