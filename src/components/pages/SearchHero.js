import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import API from '../utils/API';


const styles = {
    background: {
        backgroundColor: "black"
    },
    searchContainer: {
        width: "50%",
        height: "auto",
        margin: "5% auto"
    },
    center: {
        textAlign: "center"
    },
    resultcard: {
        width: "65%",
        height: "auto",
        margin: "5% auto",
        border: "1px solid black"
    }, image: {
        width: "100%",
    },
    marginfirstTop: {
        marginTop: "10%"
    },
    marginTop: {
        marginTop: "30%"
    }
}


function SearchHero() {
    const hulk = "hulk";
    API.search(hulk).then(res => {
        console.log(res)
    })

    return (
        <React.Fragment>
            <div style={styles.searchContainer}>
                <h1 style={styles.center}>Search Hero!</h1>
                <InputGroup size="lg">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-lg">Hero</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Search Hero here..." />
                </InputGroup>
            </div>
            <div style={styles.resultcard}>
                <Row>
                    <Col xs={5}>
                        <img src="https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg" style={styles.image} alt="picture" />
                    </Col>
                    <Col>
                        <center>
                            <h2>Thanos</h2>
                        </center>
                        <ul style={styles.marginfirstTop}><h6>Bio:</h6>
                            <li>full-name: "Thanos"</li>
                            <li>alter-egos: "No alter egos found."</li>
                            <li>place-of-birth: "Titan"</li>
                            <li>first-appearance: "Iron Man #55"</li>
                            <li>publisher: "Marvel Comics"</li>
                            <li>alignment: "bad"</li>
                        </ul>
                        <ul><h6>Aliases:</h6>
                            <li>"The Mad Titan"</li>
                            <li>"Masterlord"</li>
                            <li>"The Overmaster"</li>
                            <li>"Chins"</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul style={styles.marginTop}><h6>Stats:</h6>
                            <li>intelligence: "100"</li>
                            <li>strength: "100",</li>
                            <li>speed: "33"</li>
                            <li>durability: "100"</li>
                            <li>power: "100"</li>
                            <li>combat: "80"</li>
                        </ul>
                        <ul><h6>Physical Traits:</h6>
                            <li>"race": "Eternal"</li>
                            <li>gender": "Male"</li>
                            <li>height": "6'7"</li>
                            <li>weight": "985 lb"</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}
export default SearchHero;