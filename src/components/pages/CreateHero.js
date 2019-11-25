import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const styles = {
    inputBox: {
        width: "80%",
        marginTop: "5%"
    },
    container: {
        width: "90%",
        borderStyle: "solid",
        borderColor: "darkslategray",
        borderWidth: "2px"
    },
    image: {
        width: "100%",
        borderRadius: "10%",
        marginTop: "2%",
        marginLeft: "10%"
    },
    inline: {
        display: "inline",
    },
    textmargin: {
        margin: "0 2%"
    },
    statalias: {
        marginTop: "2%",
    }
}


function SearchHero() {
    return (
        <React.Fragment>
            <center><h1>Create Your Own!</h1></center>
            <Row>
                <Col>
                    <center>
                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Enter Name..." aria-label="Username" aria-describedby="basic-addon1" />
                        </InputGroup>

                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Enter Title..." aria-label="Username" aria-describedby="basic-addon1" />
                        </InputGroup>

                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Bio</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" placeholder="Describe your Hero..." aria-label="With textarea" />
                        </InputGroup>

                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Stat</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Enter Stat..." aria-label="Stat" aria-describedby="basic-addon1" />
                            <Button>Add Stat</Button>
                        </InputGroup>

                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Alias</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Enter Alias..." aria-label="Stat" aria-describedby="basic-addon1" />
                            <Button>Add Alias</Button>
                        </InputGroup>

                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Alignment</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Enter Alignment..." aria-label="Username" aria-describedby="basic-addon1" />
                        </InputGroup>

                        <Button variant="dark">Create Hero</Button>
                    </center>
                </Col>
                <Col>
                    <div style={styles.container}>
                        <Row>
                            <Col sm={4}>
                                <center>
                                    <img src="https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg" style={styles.image} alt="picture" />
                                </center>
                            </Col>
                            <Col sm={8}>
                                <center>
                                    <h2>Thanos</h2>
                                    <h5>the Bad Guy</h5>
                                </center>
                                <div style={styles.textmargin}>
                                    <h6 style={styles.inline}>Bio: </h6><p style={styles.inline}>Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim</p>
                                    <br></br>
                                    <h6 style={styles.inline}>Alignment: </h6><p style={styles.inline}>bad</p>
                                </div>
                            </Col>
                        </Row>
                        <div style={styles.statalias}>
                            <Row>
                                <Col>
                                    <ul>
                                        <h6>Stats:</h6>
                                        <li>Strength: 100</li>
                                        <li>Agility: 100</li>
                                        <li>Stamina: 100</li>
                                        <li>Intelect: 100</li>
                                        <li>Spirit: 100</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <h6>Aliases:</h6>
                                        <li>Bad Guy 1</li>
                                        <li>Bad Guy 2</li>
                                        <li>Bad Guy 3</li>
                                        <li>Bad Guy 4</li>
                                        <li>Bad Guy 5</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>

                    </div>
                </Col>
            </Row >
        </React.Fragment >
    )
}
export default SearchHero;