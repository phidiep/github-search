import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const SearchItem = ({ items, loading }: { items: any; loading: boolean }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {items &&
        items.map((item: any, index: number) => (
          <Card key={index} style={{ margin: "10px" }}>
            <Card.Body>
              <Card.Title  className="text-truncate">{item.title || item.name || item.login ||item.commit?.message}</Card.Title>
              <Card.Subtitle className="mb- text-muted text-truncate">
                {item.description || item.user?.login || item.commit?.author.name}
              </Card.Subtitle>
              <Card.Text></Card.Text>
              <Card.Link href={item.html_url} target="_blank">
                Go to Github
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default SearchItem;
