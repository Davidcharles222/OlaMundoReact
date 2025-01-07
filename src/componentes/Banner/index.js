import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu so David Charles, aluno Front-end da Alura. Aqui compartilho vários conhecimentos.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                
                <img
                    className={styles.minhaFoto}
                    src="https://github.com/Davidcharles222.png"
                    alt='Foto de David Charles'
                />
            </div>
        </div>
    )
}