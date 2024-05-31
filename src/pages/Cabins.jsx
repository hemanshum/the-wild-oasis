import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";

function Cabins() {
  // useEffect(() => {
  //   getCabins().then((data) => console.log(data));
  // });

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter / sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
