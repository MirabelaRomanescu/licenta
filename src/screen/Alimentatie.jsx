import React from "react";
import Navbar from "../components/Navbar";
import Leftbar from "../components/LeftBarSelection";
import { createLeftBarAlimente } from "../functionalities/mocks";
import { useParams } from "react-router-dom";
import "./styleScreen.css";

const Alimentatie = () => {
  const { section } = useParams();
  return (
    <>
      <div className="fixNav">
        <Navbar option="alimentatie" />
      </div>
      <div className="componentScreen">
        <div className="lateralNavbar">
          <Leftbar render={createLeftBarAlimente} />
        </div>
        <div className="lateralContent">
          <h1>
            Alimentatie <span className="submenuStyle">>> {section} </span>
          </h1>
          <div className="titleSeparationLine"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            commodi illo ut, sequi debitis quas. Earum quibusdam ab autem saepe
            praesentium dignissimos molestias reprehenderit deleniti sint eius
            ut aliquam velit mollitia nisi vel iusto minus, voluptatibus, quasi
            fugiat in dolores nulla alias pariatur voluptatum! Non rerum veniam
            atque sequi nobis! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Reiciendis impedit alias, sequi quaerat enim aut
            nisi nobis aspernatur unde dolores animi minus eos possimus dolore
            obcaecati blanditiis recusandae eum voluptates deleniti vero quia
            quisquam tempore dicta! Doloremque suscipit necessitatibus labore
            quam perferendis pariatur est laborum obcaecati quo illum. Quis,
            ipsa perspiciatis vitae eos inventore vel laborum eum libero soluta
            earum iste cum quia possimus cumque nisi velit alias accusamus nemo.
            Facilis, deleniti esse error impedit quibusdam placeat nesciunt
            voluptatum harum quasi sit blanditiis, adipisci ut quam odit officia
            perferendis numquam corrupti ad vero corporis reiciendis
            reprehenderit qui soluta. Esse, saepe! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repudiandae, cumque at sunt neque nemo
            ut et hic impedit, excepturi culpa expedita soluta, inventore ipsum
            laudantium? Fuga, sapiente? Odit officia perferendis necessitatibus
            ea ipsa quaerat eius dolores reiciendis, ex aut, veritatis dicta
            magnam aliquam voluptas nemo natus fugit dignissimos molestiae
            dolorem explicabo eaque deserunt! Suscipit assumenda ea adipisci!
            Officia aliquid recusandae a dolores, illum minima sed excepturi
            magni ad sint voluptas minus impedit modi quibusdam in earum placeat
            autem neque accusantium quo laboriosam natus. Dignissimos tempore
            aperiam expedita natus magni aliquid, perferendis ea sunt optio
            labore laborum nobis sit dicta amet, ex necessitatibus illo! Vel,
            eius! Ipsum ratione beatae aspernatur molestiae? Nemo, voluptates.
            Doloremque blanditiis, adipisci modi expedita recusandae dolorem
            reiciendis, cumque quam autem soluta impedit ullam nam commodi
            debitis possimus optio sint! Dolorem quas impedit, sunt harum odio
            sapiente cupiditate? Ut, accusamus! Quidem eum neque temporibus fuga
            porro est magnam assumenda adipisci possimus, soluta provident enim
            dolore modi ratione asperiores earum, hic corporis iste consequatur.
            Asperiores quam enim in fugit eveniet. Delectus aliquid dolores
            dolor, molestiae quaerat est nemo necessitatibus fuga corporis
            debitis labore sint voluptatibus id laudantium totam asperiores
            officiis nisi porro perferendis deserunt quidem minima neque!
            Numquam eveniet magnam saepe ex sed asperiores minus molestiae
            possimus corporis deserunt. Sed maiores mollitia iusto tempore hic,
            totam aliquid officiis cum velit possimus natus numquam quaerat
            debitis libero soluta sit animi illo, porro accusantium quibusdam!
            Modi a repudiandae dicta corporis omnis, iure non, nisi fugiat quos
            asperiores quisquam, id numquam nulla temporibus! Culpa suscipit
            earum ex aliquid temporibus totam ea, necessitatibus minus et enim
            rem fugiat molestias. At deleniti distinctio earum neque, numquam
            repudiandae autem ea iusto nobis vel doloremque quasi laboriosam
            aliquid dolorum quibusdam possimus consequuntur nulla necessitatibus
            suscipit perspiciatis accusantium, et delectus magni tenetur. Fugit
            dolor aliquid aut nam non deserunt beatae accusantium possimus ex.
            Vero, optio vel molestiae enim fugiat nisi labore reprehenderit at
            veniam, repellat ipsam eligendi unde assumenda voluptatem accusamus,
            consectetur praesentium saepe consequatur laudantium sint quos
            recusandae? Eveniet quis repellat laborum illum praesentium omnis
            recusandae modi repudiandae, suscipit, mollitia blanditiis soluta
            consectetur reiciendis facilis nisi iusto eius unde! Omnis
            distinctio quod neque labore sunt! Magni adipisci et neque in earum,
            debitis incidunt accusantium deleniti culpa maxime nesciunt,
            delectus ad ratione! Magni laboriosam nisi quibusdam architecto esse
            et officiis voluptate animi aperiam accusamus, beatae quae mollitia
            repellendus? Dolorum ex totam magnam maxime repellendus iste commodi
            saepe, cupiditate distinctio animi voluptatum exercitationem alias
            recusandae illum quas quisquam nostrum velit eius nisi eum.
            Exercitationem qui, nihil et deserunt porro ducimus corrupti ratione
            voluptatibus delectus, sint dolorum. Iste quo dolores qui corporis
            incidunt beatae necessitatibus cumque deserunt laborum dignissimos
            nisi temporibus dolorum amet modi sequi hic, est dolore blanditiis
            fugiat vitae accusantium et! Atque nam magni asperiores laborum! Eum
            praesentium corporis dicta nihil autem voluptatem unde quae maiores
            aliquid quibusdam blanditiis rerum eaque, quam iure voluptates
            perspiciatis dolorem cupiditate, exercitationem cumque nam corrupti
            iste a. Facilis minus nulla autem, corporis maxime optio distinctio,
            illum cumque, id est exercitationem iusto. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Architecto totam fugiat deserunt
            consectetur minima. Velit doloribus quasi dignissimos voluptatum
            esse quia omnis totam cum rerum nihil inventore sit adipisci, a
            tempora labore quibusdam eaque officiis veniam? Ducimus deleniti,
            sint quo inventore debitis sit? Hic at illo delectus magni? Harum
            cum eius sed? Neque ipsa nemo deleniti laborum amet! Cumque
            necessitatibus, minus sapiente officiis labore id dolorem alias? Ut
            molestiae consectetur fugiat dicta? Perferendis laboriosam ad,
            tempora sed quod, quia tenetur asperiores fugit saepe voluptatum
            dolor, mollitia repellat perspiciatis eum repellendus hic ullam illo
            nam at nesciunt. Quos tenetur, consequuntur sapiente sequi iusto,
            laboriosam expedita ipsum fuga, quasi dicta dolor vel voluptas ullam
            dolorem ducimus optio nam pariatur fugit cupiditate aspernatur
            corporis velit ea possimus. Tempora fuga recusandae nostrum minus
            commodi ipsam illo amet itaque, facere veniam cumque ullam cum natus
            dolores hic labore. Libero odit natus ipsa, nesciunt architecto
            autem dolorum quam dolor, in sint provident, aperiam debitis ipsam
            recusandae. Blanditiis tempora molestiae quod odio explicabo
            voluptate cumque voluptates. Dolore blanditiis incidunt quibusdam
            cupiditate pariatur voluptas illo enim tenetur? Facere veniam fugiat
            modi alias culpa nihil molestias! Veniam culpa autem nostrum
            perspiciatis, fugit placeat sit inventore pariatur voluptas optio.
            Et fuga ducimus laudantium, sequi fugit quibusdam ipsa, similique
            provident labore rerum ab cum non dolorum! Quas aliquid accusantium,
            omnis, sapiente atque maiores, exercitationem labore vitae dolorum
            earum error ab minus totam perspiciatis quisquam asperiores ipsum
            eius repudiandae ducimus inventore placeat. Recusandae delectus modi
            totam maxime ipsum animi ducimus culpa magnam, deserunt tempora,
            corporis asperiores voluptatum soluta doloribus iusto itaque
            molestias veniam qui facilis neque fugit! Nihil, ipsa labore
            cupiditate distinctio totam voluptatibus eligendi quaerat libero?
            Odio obcaecati unde ipsum atque, expedita accusamus praesentium
            molestias sequi voluptates, impedit dignissimos natus ipsam
            similique et maxime blanditiis porro illo. Magnam placeat,
            distinctio minus vel eos rem excepturi voluptate aliquam saepe sint,
            aut ut repellendus? Esse cum aliquam, saepe fugit accusamus ad quo
            aperiam ducimus in iure, ipsum, nihil dolorem? Deleniti laboriosam
            at laborum soluta dolorem, voluptate vel cupiditate aliquid mollitia
            minus laudantium perspiciatis rem, animi error nihil modi. Nam
            consequatur, pariatur optio, unde nulla blanditiis atque nostrum
            porro totam itaque tenetur eligendi minima ab recusandae neque nobis
            sint non adipisci quibusdam accusantium sed aliquam quia. Reiciendis
            aspernatur consequuntur libero cumque ad culpa explicabo dignissimos
            nam ab blanditiis, at deserunt hic veniam cupiditate. Ex cupiditate
            sed fugit ducimus voluptatibus impedit dicta recusandae facere
            voluptate cumque fuga reprehenderit, at cum nam libero repellendus
            eos sequi voluptatem? Impedit quas odit voluptatum! Perferendis
            doloribus laboriosam eligendi eum sed non sint consequuntur ad
            laudantium doloremque id modi hic quisquam dolorum quia vitae
            quibusdam illo voluptas quo, illum alias eius, tempora facilis
            repudiandae? Eius, unde commodi voluptatem quam dicta accusantium
            dolor excepturi ab voluptate hic odio libero rerum adipisci, non cum
            quod tenetur sed? Enim a iste officiis voluptatum suscipit ullam
            dignissimos minima magni laudantium ab voluptatibus neque molestias,
            non molestiae similique eius vel eum harum odit saepe totam? Iure
            saepe aliquam voluptas delectus, eligendi eaque ab assumenda
            nostrum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Alimentatie;
