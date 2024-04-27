import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";



const Article = () => {
    const [article, setArticle] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchArticle = async () => {
          try {
            const response = await axios.get(
              `Article.json`
            );
            setArticle(response.data);
          } catch (error) {
            console.error("Error fetching article:", error);
          }
        };
    
        fetchArticle();
      }, [id]);
  return (
    <>
    <div>Article</div>
    <div>{article}</div>
    </>
  )
}

export default Article