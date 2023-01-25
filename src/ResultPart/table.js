import React from 'react';
import { Table } from 'antd';
import {duzBeyazDort, duzBeyazBes, duzYesilDort, duzYesilBes} from '../constants/duzyetmissekiz';

const GlassTable = ({data}) => {
    console.log(data);
    const columns = [
        {
          title: '0,7',
          dataIndex: 'value',
          key: '0,7',
          width: 30,
        },
        {
          title: '0,8',
          dataIndex: 'value',
          key: '0,8',
          width: 30,
        },
        {
            title: '0,9',
            dataIndex: 'value',
            key: '0,9',
            width: 30,
          },
          {
            title: '1',
            dataIndex: 'value',
            key: '1',
            width: 30,
          },
          {
            title: '1,1',
            dataIndex: 'value',
            key: '1,1',
            width: 30,
          },
          {
            title: '1,2',
            dataIndex: 'value',
            key: '1,2',
            width: 30,
          },
          {
            title: '1,3',
            dataIndex: 'value',
            key: '1,3',
            width: 30,
          },
          {
            title: '1,4',
            dataIndex: 'value',
            key: '1,4',
            width: 30,
          },
          {
            title: '1,5',
            dataIndex: 'value',
            key: '1,5',
            width: 30,
          },
        //   {
        //     title: '1,6',
        //     dataIndex: '1,6',
        //     key: '1,6',
        //     width: 30,
        //   },
        //   {
        //     title: '1,7',
        //     dataIndex: '1,7',
        //     key: '1,7',
        //     width: 30,
        //   },
        //   {
        //     title: '1,8',
        //     dataIndex: '1,8',
        //     key: '1,8',
        //     width: 30,
        //   },
        //   {
        //     title: '1,9',
        //     dataIndex: '1,9',
        //     key: '1,9',
        //     width: 30,
        //   },
        //   {
        //     title: '2',
        //     dataIndex: '2',
        //     key: '2',
        //     width: 30,
        //   },
         
      ];

	return (
		<Table columns={columns} dataSource={data} />
	);
}

export default GlassTable;