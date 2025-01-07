import styles from "./SobreMim.module.css";
import PostModelo from "../../componentes/PostModelo/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3>Olá, eu sou o David!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto David"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        dignissimos harum incidunt. Quam nihil magni cumque dolor et maiores
        officia quibusdam? Veniam asperiores quos eum iure fugiat quo ipsum
        architecto.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        dignissimos harum incidunt. Quam nihil magni cumque dolor et maiores
        officia quibusdam? Veniam asperiores quos eum iure fugiat quo ipsum
        architecto.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        dignissimos harum incidunt. Quam nihil magni cumque dolor et maiores
        officia quibusdam? Veniam asperiores quos eum iure fugiat quo ipsum
        architecto.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        dignissimos harum incidunt. Quam nihil magni cumque dolor et maiores
        officia quibusdam? Veniam asperiores quos eum iure fugiat quo ipsum
        architecto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        dignissimos harum incidunt. Quam nihil magni cumque dolor et maiores
        officia quibusdam? Veniam asperiores quos eum iure fugiat quo ipsum
        architecto.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        dignissimos harum incidunt. Quam nihil magni cumque dolor et maiores
        officia quibusdam? Veniam asperiores quos eum iure fugiat quo ipsum
        architecto.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        dignissimos harum incidunt. Quam nihil magni cumque dolor et maiores
        officia quibusdam? Veniam asperiores quos eum iure fugiat quo ipsum
        architecto.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        dignissimos harum incidunt. Quam nihil magni cumque dolor et maiores
        officia quibusdam? Veniam asperiores quos eum iure fugiat quo ipsum
        architecto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        dignissimos harum incidunt. Quam nihil magni cumque dolor et maiores
        officia quibusdam? Veniam asperiores quos eum iure fugiat quo ipsum
        architecto.
      </p>
    </PostModelo>
  );
}
