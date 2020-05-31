import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imagine from "../assets/home3.png";
import "./styleScreen.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="centrare">
        <h1 className="hello">Bine ai venit pe Diabook!</h1>
        <p>
          Aceasta platforma este destinata persoanelor care sufera de diabet,
          care sunt predispuse a avea diabet, dar si tuturor persoanelor care
          doresc sa se informeze despre aceasta patologie sau doresc sa isi
          gestioneze mai bine regimul alimentar. In aces sens, continutul este
          impartit in 3 parti, si anume:
        </p>
        <ul>
          <li>
            Despre diabet – In aceasta sectiune sunt abordate subiecte precum:
            simptome, complicatii, medicatie, monitorizare si gestionare in
            ansamblu a diabetului
          </li>
          <li>
            Profilul meu – unde iti poti adauga date referitoare la tratament,
            consultatii si analize generale cu scopul de a fi mai usor de
            gestionat si monitorizat
          </li>
          <li>
            Alimentatie – pagina in care afli cum poti sa iti calculezi
            caloriile la fiecare masa si poti vedea diferenta in continutul
            energetic a diverse produse alimentare
          </li>
        </ul>
      </div>
      <div className="homeDetalii">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          vitae, illum, quidem quaerat doloremque molestiae perferendis
          perspiciatis, dolores et architecto beatae qui! Aut consequuntur,
          totam dolore iusto inventore consectetur ipsam laboriosam facere
          veritatis magni expedita nobis excepturi error hic tempora odio
          voluptatem ad, alias quod asperiores. Iure veniam alias itaque velit
          adipisci architecto non doloribus et laboriosam! Consectetur ratione
          iusto doloremque reiciendis dolor quas labore aspernatur tempore
          architecto iure. Consequatur tempora rem quod ad aliquam? Dolores quod
          qui quia dolorem ad id numquam cupiditate, aperiam unde impedit
          maxime, quas earum ut exercitationem eveniet fugiat tenetur vitae
          architecto adipisci, excepturi voluptas.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
          aliquid quisquam commodi quod libero vel voluptatibus quia, repellat
          esse aperiam placeat a quae harum alias laudantium veniam maiores aut
          blanditiis dolore sit quo sequi ipsam maxime temporibus! Incidunt,
          quas impedit. Dolore numquam necessitatibus temporibus repellat
          praesentium perferendis aliquid cupiditate aperiam.
        </p>
      </div>
      <div className="centrare">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum
        voluptates doloremque eius, quae laboriosam, architecto dignissimos
        praesentium, optio hic repellendus? Aperiam praesentium quod sapiente?
        Maiores, veritatis, exercitationem autem quam neque natus magnam iste
        praesentium aperiam repellat, sunt amet illo placeat quis suscipit ipsum
        impedit esse voluptatem! Inventore iure id a cumque saepe, alias beatae
        delectus asperiores in placeat debitis dolorum vel voluptate repellendus
        libero nihil expedita, incidunt ducimus. Eaque doloribus, nisi soluta
        error, quos officia ipsum similique incidunt cumque, neque pariatur?
        Deleniti perferendis corporis quis dignissimos officia recusandae
        aspernatur necessitatibus hic, repellat placeat, asperiores architecto!
        Esse perspiciatis ut a.
      </div>
      <Footer />
    </div>
  );
};

export default Home;
