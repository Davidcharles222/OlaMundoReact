import "./Post.css";
import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "../../componentes/PostModelo/PostModelo";
import { useMemo } from "react"; //deixar a performace mais fluida
import { marked } from "marked";
import NaoEncontrada from "../NaoEncontrada";
import Banner from "../../componentes/Banner";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  const MarkdowRenderer = ({ content }) => {
    const htmlContent = useMemo(() => marked(content), [content]);
    //objetivo converter um texto em Markdown (passado pela prop content) em HTML e renderizá-lo de forma segura no DOM.

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    //injeta resultado direto do DOM do HTML
  };

  return (
    <>
      <Banner />
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <MarkdowRenderer content={post.texto} />
        </div>
      </PostModelo>
    </>
  );
}
