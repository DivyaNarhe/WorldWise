import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
    return (
        <main className={styles.homepage}>
            <PageNav />

            <section>
                <h1>
                    You travel the world.
                    <br />
                    WorldWise keeps track of your adventures.
                </h1>

                <h2>
                    A world map that tracks your footsteps into every city
                    you can think of.
                </h2>
            </section>
        </main>
    );
}