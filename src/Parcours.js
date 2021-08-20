import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pdoc from './assets/parcoursdoc.png'
import pdoc1 from './assets/parcoursdoc1.png'
import pdoc2 from './assets/parcoursdoc2.png'
import dot from './assets/dot.png'
import cetificate from './assets/certificate.png'
class Parcours extends React.Component {
    render() {
        return <Container>
            <Table className="w-100 px-1">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={cetificate} width="32px" height="32px" /> </td>
                        <td align="left"><p className="diplome m-0 p-0">Doctorat en médecine, Faculté de Médecine et de Pharmacie de Rabat, Maroc.</p></td>
                    </tr>
                    <tr>
                        <td><img src={cetificate} width="32px" height="32px" /> </td>
                        <td align="left"><p className="diplome m-0 p-0">Diplôme de spécialité en Chirurgie Urologique de la Faculté de Médecine et de Pharmacie de Rabat, Maroc.</p></td>
                    </tr>
                    <tr>
                        <td><img src={cetificate} width="32px" height="32px" /> </td>
                        <td align="left"><p className="diplome m-0 p-0">Concours de Internat du Centre Hospitalier Universitaire Ibn Sina de Rabat, Octobre 1997.</p></td>
                    </tr>
                    <tr>
                        <td><img src={cetificate} width="32px" height="32px" /> </td>
                        <td align="left"><p className="diplome m-0 p-0">Attestation Universitaire de Coeliochirurgie de la Faculté de Médecine et de Pharmacie de Rabat, Maroc.</p></td>
                    </tr>
                    <tr>
                        <td><img src={cetificate} width="32px" height="32px" /> </td>
                        <td align="left"><p className="diplome m-0 p-0">Diplôme d Onco Urologie de la Faculté de Médecine et de Pharmacie de Rabat Maroc.</p></td>
                    </tr>
                    <tr>
                        <td><img src={cetificate} width="32px" height="32px" /> </td>
                        <td align="left"><p className="diplome m-0 p-0">Diplôme d Université de Dissection et Anatomie coelioscopique de l Université de Montpellier 1, France.</p></td>
                    </tr>
                    <tr>
                        <td><img src={cetificate} width="32px" height="32px" /> </td>
                        <td align="left"><p className="diplome m-0 p-0">Diplôme d' Université de Chirurgie Laparoscopique avancée de l Université Paris XI, France.</p></td>
                    </tr>
                    <tr>
                        <td><img src={cetificate} width="32px" height="32px" /> </td>
                        <td align="left"><p className="diplome m-0 p-0">Diplôme d'Université d' Urodynamique, Université Paris 7, Denis Diderot, Faculté de Médecine Xavier Bichat, Paris, France.</p></td>
                    </tr>
                    <tr>
                        <td><img src={cetificate} width="32px" height="32px" /> </td>
                        <td align="left"><p className="diplome m-0 p-0">Attestation de Formation Spécialisée de l Université de Bourgogne, France.</p></td>
                    </tr>
                    <tr>
                        <td><img src={cetificate} width="32px" height="32px" /> </td>
                        <td align="left"><p className="diplome m-0 p-0">Diplôme d'Échographie, Faculté de Médecine et de Pharmacie de Rabat, Maroc.</p></td>
                    </tr>
                    <tr>
                        <td><img src={cetificate} width="32px" height="32px" /> </td>
                        <td align="left"><p className="diplome m-0 p-0">Diplôme d'Université de Chirurgie Laparoscopique - IRCAD - Université de Strasbourg, France.</p></td>
                    </tr>
                </tbody>
            </Table>
            
        </Container>
    }
}

export default Parcours;