import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DropDown from 'react-bootstrap/DropDown';


const styles = {
    inputBox: {
        width: "80%",
        marginTop: "5%"
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
                    <div>preview</div>
                </Col>
            </Row >
        </React.Fragment >
    )
}
export default SearchHero;