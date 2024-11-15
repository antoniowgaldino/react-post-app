import { Contato } from "../pages/contato/Contato.jsx";
import { Home } from "../pages/home/Home.jsx";
import { Post } from "../pages/post/Post.jsx";
import { Sobre } from "../pages/sobre/Sobre.jsx";

export const routes = [
    { 
        path: '/home', 
        element: <Home />,
    },
    { 
        path: '/post', 
        element: <Post />,
    },
    { 
        path: '/contato',
        element: <Contato />,
    },
    { 
        path: '/sobre', 
        element: <Sobre />,
    }
  ];
  