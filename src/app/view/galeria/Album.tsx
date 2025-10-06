import ComponentCard from "@/components/cards/ComponentCard";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import DataTable from "datatables.net-react";
import ReactDOMServer from "react-dom/server";
import {
  TbChevronLeft,
  TbChevronRight,
  TbChevronsLeft,
  TbChevronsRight,
} from "react-icons/tb";
import DT from "datatables.net-bs5";
import "datatables.net-fixedheader";
// estructura del data table----- columns indica las columnas como ira y los span que se coloca y tableData lad aat en bruto que ira
import { columns, tableData } from "@/app/view/galeria/AlbumData";
import { getAlbum } from "@/app/services/galeria/album";
import type { Album } from "@/app/interface/galeria/Album";
import { useEffect } from "react";
// ----------

const Example = () => {
    DataTable.use(DT);
    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const respons = await getAlbum();
                console.log(respons);
                tableData.body = respons.response;
                
                
            } catch (error) {
                console.log(error);                
            }finally {
                // setIsLoading(false);
                // console.log('finalizo');
            }
            
        };

        fetchAlbum();
        
    }, []);
    return (
        <ComponentCard title="Example">
            <DataTable
                data={tableData.body}
                columns={columns}
                options={{
                fixedHeader: {
                    header: true,
                    headerOffset: 65,
                },
                pageLength: 25,
                responsive: true,
                language: {
                    paginate: {
                    first: ReactDOMServer.renderToStaticMarkup(
                        <TbChevronsLeft className="fs-lg" />
                    ),
                    previous: ReactDOMServer.renderToStaticMarkup(
                        <TbChevronLeft className="fs-lg" />
                    ),
                    next: ReactDOMServer.renderToStaticMarkup(
                        <TbChevronRight className="fs-lg" />
                    ),
                    last: ReactDOMServer.renderToStaticMarkup(
                        <TbChevronsRight className="fs-lg" />
                    ),
                    },
                },
                }}
                className="table table-striped dt-responsive align-middle mb-0"
            >
                <thead className="thead-sm text-uppercase fs-xxs">
                <tr>
                    {tableData.header.map((label, idx) => (
                    <th key={idx}>{label}</th>
                    ))}
                </tr>
                </thead>
            </DataTable>
        </ComponentCard>
    );
};

const Album = () => {
    return (
        <Container fluid>
            <PageBreadcrumb title="Fixed Header" subtitle="Data Tables" />

            <Row className="justify-content-center">
                <Col xxl={12}>
                <Example />
                </Col>
            </Row>
        </Container>
    );
};

export default Album;
