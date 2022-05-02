import React from 'react'
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

import {Card, Avatar, Space} from 'antd'
import { EditOutlined, EllipsisOutlined, DeleteOutlined  } from '@ant-design/icons';
import { getInvoice, deleteInvoice } from "../data";

const { Meta } = Card;

function Invoice() {
    let params = useParams();
    let invoice = getInvoice(Number(params.id));
    let navigate = useNavigate();
    let location = useLocation();
  return (
    <div>
        {/* <main style={{ padding: "1rem" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
            <p>
                <button
                onClick={() => {
                    deleteInvoice(invoice.number);
                    navigate("/invoices" + location.search);
                }}
                >
                Delete
                </button>
            </p>
        </main> */}

      <Space style={{margin: '20px'}}>
        <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://picsum.photos/150"
              />
            }
            actions={[
              <DeleteOutlined key="delete" onClick={() => {
                deleteInvoice(invoice.number);
                navigate("/invoices" + location.search);
            }}/>,
              // <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={invoice.name}
            />
            <h2>Total Due : {invoice.amount}</h2>
            <h3>Due Date: {invoice.due}</h3>
          </Card>
      </Space>
    </div>
  )
}

export default Invoice