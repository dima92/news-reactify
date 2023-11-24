import { getLatestNews } from "../../api/apiNews.js";
import { useFetch } from "../../helpers/hooks/useFetch";
import {NewsApiResponse} from "../../interfaces";
import BannersList from "../BannersList/BannersList.js";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
