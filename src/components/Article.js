import React from "react";
import { List, Avatar, Icon } from "antd";

const IconText = ({ type, text }) => ( <
    span >
    <
    Icon type = { type }
    style = {
        {
            marginRight: 8
        }
    }
    /> { text } < /
    span >
);

const Articles = props => {
        return ( <
                List itemLayout = "vertical"
                size = "large"
                pagination = {
                    {
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3
                    }
                }
                dataSource = { props.data }
                renderItem = {
                    item => ( <
                        List.Item key = { item.title }
                        extra = { <
                            img
                            width = { 272 }
                            alt = "logo"
                            src = "https://lh3.googleusercontent.com/Ek9uOJCCuQnKqqqmNhMTB0mY1DM3KI1joSjtYskRNSORcsAj05st1ztBIE8H2POx0CKG" /
                            >
                        } >
                        <
                        List.Item.Meta avatar = { < Avatar src = { item.avatar }
                            />}
                            title = { < a href = { `/articles/${item.id}` } > { item.title } < /a>}
                                description = { item.description }
                                /> { item.content } <
                                /List.Item>
                            )
                        }
                        />
                    );
                };

                export default Articles;