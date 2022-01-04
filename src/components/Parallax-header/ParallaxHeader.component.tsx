import { Col, Row } from "antd";
import Card from "antd/lib/card";
import Meta from "antd/lib/card/Meta";
import { Job } from "../../resources/career/models/Job.model";
import "./ParallaxHeader.style.scss";
export default function ParallaxHeader({
  imageUrl,
  name,
  backgroundUrl,
  date,
    description
}: Job) {
  console.log(name);
  return (
    <div className={`ParallaxHeader ${backgroundUrl}`}>
      <Row justify="center">
        <Col span={12}>
          <Card
            hoverable={false}
            style={{ width: 240 }}
            cover={<img alt={`Logo de ${name}`} src={imageUrl} />}
            title={`${date.end.format(
                "YYYY"
            )} - ${date.start.format("YYYY")}`}
          >
            <Meta
              title={name}
              description={description}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}