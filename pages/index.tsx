import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import SearchItem from "../components/search-item";

import { Form, Button, Col, Row, Alert, Spinner } from "react-bootstrap";
import { useState } from "react";
import CustomizePagination from "../components/pagination";
const link = "https://api.github.com/search/";
const Home: NextPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [select, setSelect] = useState("code");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const selectData = [
    "code",
    "commits",
    "issues",
    "labels",
    "repositories",
    "topics",
    "users",
  ];
  // data query
  const searchData = async (url = `${link}${select}?q=${searchText}`) => {
    console.log(url);
    await fetch(url, {
      headers: {
        Accept: "application/vnd.github.text-match+json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  // paging calculate
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const lastPageItem = currentPage * itemsPerPage;
  const firstPageItem = lastPageItem - itemsPerPage;
  var currentItems = !items ? [] : items.slice(firstPageItem, lastPageItem);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Row style={{ margin: "10px" }}>
        <Image src="/github.svg" alt="Github Logo" width={72} height={16} />
        <Col>
          <p className="h1"> Github Search</p>
          <p className="h5"> This is simple page using Github Search API</p>
        </Col>
      </Row>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Row xs={1} md={3} style={{ margin: "5px" }}>
          <Col>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="search keyword"
              onBlur={(e) => setSearchText(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Select
              className="mb-3"
              defaultValue={select}
              aria-label="Default select example"
              onChange={(e) => setSelect(e.target.value)}
            >
              {selectData.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={12} md={1} style={{ textAlign: "center" }}>
            <Button type="button" onClick={() => searchData()}>
              Search
            </Button>
          </Col>
          {!items && <Alert style={{ margin: "5px" }} variant={"danger"}>No data</Alert>}
        </Row>
      </Form>
      <SearchItem items={currentItems} loading={false}></SearchItem>
      {items && (
        <CustomizePagination
          itemsPerPage={itemsPerPage} 
          totalItems={items.length}
          paginate={paginate}
        ></CustomizePagination>
      )}
    </>
  );
};

export default Home;
