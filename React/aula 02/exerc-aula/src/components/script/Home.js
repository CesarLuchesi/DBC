import Logo from "./Logo";
import styles from "../styles/Home.module.css";



const Home = () => {
  return (
    <main>
        <h1 className={styles.h1}> Estamos aprendendo HTML e CSS com o melhor professor de todos </h1>
        <div className={styles.containerLogo}>
          <Logo />
          <Logo />
          <Logo />
        </div>
        <div className={styles.textCogu}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nesciunt voluptas aspernatur deserunt. Corrupti similique, distinctio labore tempora saepe quae deserunt beatae hic dolor, est excepturi reiciendis aliquam maiores quas!</p>
        </div>

        <section className={styles.mapa}>
            <h2>Endereço da DBC</h2>
            <aside className={styles.localizacao}>
              <iframe
              src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.4089120483595!2d-51.20348518438338!3d-29.996412836005753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1645473021714!5m2!1spt-BR!2sbr" width={'50%'} height={'300px'}
             ></iframe>
            </aside>
        </section>
    </main>
  );
};
export default Home;