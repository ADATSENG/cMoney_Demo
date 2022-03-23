import { FaThLarge,FaThList,FaAlignJustify} from 'react-icons/fa';
export const MODE = {
    FaThList:{
        title:'清單',
        render: <FaThList></FaThList>,
        key:'FaThList'
    },
    FaAlignJustify:{
        title:'列表',
        render: <FaAlignJustify></FaAlignJustify>,
        key:'FaAlignJustify'
    },
    FaThLarge:{
        title:'圖表',
        render:<FaThLarge></FaThLarge>,
        key:'FaThLarge'
    }

}