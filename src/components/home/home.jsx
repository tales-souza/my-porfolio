
import React from "react";
import { Row, Col, Card } from 'react-materialize';
import User from '../user/user';
import Experience from '../experience/experience'

import company_avatar from '../../images/uncisal.jpg';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/fat.jpg';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      {<User />}
    </Col>
    <Col m={8} s={12}>
      <h5 className="subtitle">Minhas habilidades</h5>
      <Card>
        <div>
          <p><b>Objetivos</b></p>
          <p>"Trabalhar como desenolvedor Web Frontend, Backend ou FullStack."</p>
          <br />
          <p><b>Conhecimentos</b></p>
          <p>"Em <b>Frontend</b>, tenho conhecimentos nas linguagens HTML, CSS e JAVASCRIPT(ES6).Tenho também habilidades
            com a biblioteca ReactJS e dos frameworks CSS Bootstrap e Materialize."</p>
          <br />

          <p>Em <b>BackEnd</b>, desenvolvo nas linguagens PHP e PYTHON, com os Frameworks Laravel e Django. Possuo
           também habilidades no desenvolvimento de API RESTFULL com o Framework PHP SLIM. </p>

           <br/>

           <p>Outras informações sobre minhas habilidades estão no meu currículo. </p>


        </div>
      </Card>
      <h5 className="subtitle">Escolaridade</h5>
      <Experience title="Graduação"
        company="UNCISAL"
        description="Curso superior tecnológico em análise e desenvolvimento de sistemas."
        avatar={company_avatar}
      />
      <Experience title="Técnico em informática"
        company="Faculdade de Tecnologia de Alagoas"
        description="Curso técnico em informática voltado para programação."
        avatar={company_avatar2}
      />
    </Col>
  </Row>
);

export default Home;