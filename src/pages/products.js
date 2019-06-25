import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: "0d404a91-5e5e-4573-b66e-13c3cc707485",
          name: "Wine - Lou Black Shiraz",
          description:
            "nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero",
          imageUrl: "http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"
        },
        {
          id: "a3acf323-7beb-4220-bb84-520b653ef671",
          name: "Dome Lid Clear P92008h",
          description:
            "sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        },
        {
          id: "c01cb337-2064-4ccf-aad7-075aada7c915",
          name: "Coffee Beans - Chocolate",
          description:
            "lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum",
          imageUrl: "http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"
        },
        {
          id: "95faed39-08dc-46ad-8d76-918e52e3f703",
          name: "Wine - Fontanafredda Barolo",
          description:
            "tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
          imageUrl: "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
        },
        {
          id: "3b5634d2-4c18-4c6a-b307-8973bd3520f5",
          name: "Seaweed Green Sheets",
          description:
            "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: "fba00d0a-f34b-4ef8-b0a2-ac5733456b1e",
          name: "Chick Peas - Dried",
          description:
            "lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut",
          imageUrl: "http://dummyimage.com/300x200.bmp/dddddd/000000"
        },
        {
          id: "9bb6360e-dda4-44dd-a00b-3f0d27198e5e",
          name: "Kale - Red",
          description:
            "et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante",
          imageUrl: "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
        },
        {
          id: "e1e22a32-37c9-489f-9ff3-c40bde7ca09e",
          name: "Lid Coffee Cup 8oz Blk",
          description:
            "tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
        },
        {
          id: "7548077e-8e63-4bd1-b470-91d898450529",
          name: "Coconut - Creamed, Pure",
          description:
            "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
          imageUrl: "http://dummyimage.com/300x200.png/dddddd/000000"
        },
        {
          id: "c860e6a8-c356-473a-95a8-4f33b5c976b9",
          name: "Sauce - Oyster",
          description:
            "platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
        },
        {
          id: "2e60b23d-7e9e-47cf-8d13-38b0fb6f10f7",
          name: "Butter - Salted",
          description:
            "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: "147c72bd-7225-45e4-a809-17db17f0392a",
          name: "Garbage Bags - Clear",
          description:
            "pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
          imageUrl: "http://dummyimage.com/300x200.bmp/dddddd/000000"
        },
        {
          id: "415fff28-6990-46e5-a9af-1f093de99181",
          name: "Island Oasis - Cappucino Mix",
          description:
            "amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor",
          imageUrl: "http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"
        },
        {
          id: "84fdc1b9-37fd-4b2b-b3a1-2ff35b7ad242",
          name: "Cheese - Brie, Triple Creme",
          description:
            "metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
          imageUrl: "http://dummyimage.com/300x200.png/dddddd/000000"
        },
        {
          id: "07e2d3dc-21d8-42d5-bdc1-1fb7c8f11340",
          name: "Sauce - Salsa",
          description:
            "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
          imageUrl: "http://dummyimage.com/300x200.bmp/dddddd/000000"
        },
        {
          id: "012a3d88-e1aa-42ad-91fa-a2459bbf467f",
          name: "Foam Tray S2",
          description:
            "tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat",
          imageUrl: "http://dummyimage.com/300x200.bmp/dddddd/000000"
        },
        {
          id: "5091113b-f2a5-4dd0-8df6-74c5435923f9",
          name: "Wine - Magnotta - Cab Sauv",
          description:
            "suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam",
          imageUrl: "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
        },
        {
          id: "24488ee9-07c8-418e-9515-e90be630f8da",
          name: "Salt - Rock, Course",
          description:
            "ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis",
          imageUrl: "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
        },
        {
          id: "cbdbc63d-508c-4efe-b67a-8cdd0f815096",
          name: "Ham - Proscuitto",
          description:
            "odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque",
          imageUrl: "http://dummyimage.com/300x200.png/dddddd/000000"
        },
        {
          id: "42733e2a-bb66-4eb6-9752-1970c1c4f04a",
          name: "Cheese - Pied De Vents",
          description:
            "duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec",
          imageUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff"
        }
      ]
    };
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {products.map(product => (
            <Col sm="3">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={product.imageUrl}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <Button>Add to cart</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;
