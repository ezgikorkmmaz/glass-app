import React, {useState} from 'react';
import { Select, Button, Table, Input } from 'antd';
import {duzBeyazDort, duzBeyazBes, duzYesilDort, duzYesilBes} from '../constants/duzyetmissekiz';
import {duzBeyazDortElli, duzBeyazBesElli, duzYesilDortElli, duzYesilBesElli} from '../constants/duzelli';
import {kavisliBeyazDortElli, kavisliBeyazBesElli, kavisliYesilDortElli, kavisliYesilBesElli} from '../constants/kavislielli';
import {kavisliBeyazDort, kavisliBeyazBes, kavisliYesilDort, kavisliYesilBes} from '../constants/kavisliyetmissekiz';

const { Option } = Select;

const ResultPart = ({result, glassType, arrayVal}) => {
	const [glassColor, setGlassColor] = useState();
	const [glassThickness, setGlassThickness] = useState();
	const [glassThickVal, setGlassThickVal] = useState();
	const [shownValueYS, setShownValueYS] = useState();
	const [shownValueElli, setShownValueElli] = useState();
	const [voltageVal, setVoltageVal] = useState();

	const arr = [
		{
			key:'1',
			elliVal: shownValueElli,
			ysVal: shownValueYS
		},
	];

	const columns = [
        {
          title: '50%A',
          dataIndex: 'elliVal',
          key: '1',
          width: 30,
        },
        {
          title: '78%A',
          dataIndex: 'ysVal',
          key: '2',
          width: 30,
        },
      ];

	const calculateFunc = () =>{
		if(glassType === 'duzcam'){
			if(glassColor === 'yesil' && glassThickness === '4mm'){
				const valueOfTableYS = duzYesilDort.filter((el) => el.key === glassThickVal)[0].value;
				const deneme = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableYS.replace(",","."))));
				const sumAll = deneme.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueYS(voltageVal * (1/sumAll).toFixed(2));
				
				const valueOfTableElli = duzYesilDortElli.filter((el) => el.key === glassThickVal)[0].value;
				const denemeElli = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableElli.replace(",","."))));
				const sumAllElli = denemeElli.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueElli(voltageVal * (1/sumAllElli).toFixed(2));
			}
			if(glassColor === 'yesil' && glassThickness === '5mm'){
				const valueOfTableYS = duzYesilBes.filter((el) => el.key === glassThickVal)[0].value;
				const deneme = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableYS.replace(",","."))));
				const sumAll = deneme.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueYS(voltageVal * (1/sumAll).toFixed(2));
				const valueOfTableElli = duzYesilBesElli.filter((el) => el.key === glassThickVal)[0].value;
				const denemeElli = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableElli.replace(",","."))));
				const sumAllElli = denemeElli.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueElli(voltageVal * (1/sumAllElli).toFixed(2));
			}
			if(glassColor === 'beyaz' && glassThickness === '4mm'){
				const valueOfTableYS = duzBeyazDort.filter((el) => el.key === glassThickVal)[0].value;
				const deneme = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableYS.replace(",","."))));
				const sumAll = deneme.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueYS(voltageVal * (1/sumAll).toFixed(2));
				const valueOfTableElli = duzBeyazDortElli.filter((el) => el.key === glassThickVal)[0].value;
				const denemeElli = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableElli.replace(",","."))));
				const sumAllElli = denemeElli.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueElli(voltageVal * (1/sumAllElli).toFixed(2));
			}
			if(glassColor === 'beyaz' && glassThickness === '5mm'){
				const valueOfTableYS = duzBeyazBes.filter((el) => el.key === glassThickVal)[0].value;
				const deneme = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableYS.replace(",","."))));
				const sumAll = deneme.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueYS(voltageVal * (1/sumAll).toFixed(2));
				const valueOfTableElli = duzBeyazBesElli.filter((el) => el.key === glassThickVal)[0].value;
				const denemeElli = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableElli.replace(",","."))));
				const sumAllElli = denemeElli.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueElli(voltageVal * (1/sumAllElli).toFixed(2));
			}
		} 
		else if(glassType === 'kavisli'){
			if(glassColor === 'yesil' && glassThickness === '4mm'){
				const valueOfTableYS = kavisliYesilDort.filter((el) => el.key === glassThickVal)[0].value;
				const deneme = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableYS.replace(",","."))));
				const sumAll = deneme.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueYS(voltageVal * (1/sumAll).toFixed(2));
				const valueOfTableElli = kavisliYesilDortElli.filter((el) => el.key === glassThickVal)[0].value;
				const denemeElli = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableElli.replace(",","."))));
				const sumAllElli = denemeElli.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueElli(voltageVal * (1/sumAllElli).toFixed(2));
			}
			if(glassColor === 'yesil' && glassThickness === '5mm'){
				const valueOfTableYS = kavisliYesilBes.filter((el) => el.key === glassThickVal)[0].value;
				setShownValueYS((result * parseFloat(valueOfTableYS.replace(",","."))).toFixed(1));
				const valueOfTableElli = kavisliYesilBesElli.filter((el) => el.key === glassThickVal)[0].value;
				const denemeElli = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableElli.replace(",","."))));
				const sumAllElli = denemeElli.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueElli(voltageVal * (1/sumAllElli).toFixed(2));
			}
			if(glassColor === 'beyaz' && glassThickness === '4mm'){
				const valueOfTableYS = kavisliBeyazDort.filter((el) => el.key === glassThickVal)[0].value;
				const deneme = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableYS.replace(",","."))));
				const sumAll = deneme.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueYS(voltageVal * (1/sumAll).toFixed(2));
				const valueOfTableElli = kavisliBeyazDortElli.filter((el) => el.key === glassThickVal)[0].value;
				const denemeElli = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableElli.replace(",","."))));
				const sumAllElli = denemeElli.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueElli(voltageVal * (1/sumAllElli).toFixed(2));
			}
			if(glassColor === 'beyaz' && glassThickness === '5mm'){
				const valueOfTableYS = kavisliBeyazBes.filter((el) => el.key === glassThickVal)[0].value;
				const deneme = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableYS.replace(",","."))));
				const sumAll = deneme.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueYS(voltageVal * (1/sumAll).toFixed(2));
				const valueOfTableElli = kavisliBeyazBesElli.filter((el) => el.key === glassThickVal)[0].value;
				const denemeElli = arrayVal.map((elem) => 1 / (elem * parseFloat(valueOfTableElli.replace(",","."))));
				const sumAllElli = denemeElli.reduce((partialSum, a) => partialSum + a, 0);
				setShownValueElli(voltageVal * (1/sumAllElli).toFixed(2));
			}
		}
	};

	return (
		<div className="menu">
			<div className="menu-part-one">
			<span style={{ marginRight: '20px'}}>Cam Rengi</span>
			<Select
				onChange={(val) => setGlassColor(val)}
				style={{width: 200}}
			>
				<Option key={'yesil'}>
					Yeşil
				</Option>
				<Option key={'beyaz'}>
					Beyaz
				</Option>
			</Select>
			</div>
			<div className="menu-part-one">
			<span style={{ marginRight: '20px'}}>Cam Kalınlığı</span>
			<Select
				onChange={(val) => setGlassThickness(val)}
				style={{width: 200}}
			>
				<Option key={'4mm'}>
					4mm
				</Option>
				<Option key={'5mm'}>
					5mm
				</Option>
			</Select>
			</div>
			<div>
				<span style={{marginRight: '20px'}}>0,7 to 2</span>
				<Input defaultValue={glassThickVal} onChange={(e) => setGlassThickVal(e.target.value)} style={{width: 100}} />
				</div>
			<div style={{marginTop: '20px'}}>
				<span style={{marginTop: '20px', marginRight: '20px'}}>Araç Voltajı</span>
				<Input defaultValue={voltageVal} onChange={(e) => setVoltageVal(e.target.value)} style={{width: 100}} />
			</div>
			<Button style={{ margin: '12px 0'}} onClick={calculateFunc} className="calculate-btn">Bitir</Button>
			{/* <span>Kullanılacak Tel Kalınlığı: {result}</span>
			<span>Toplam Tel Uzunluğu: {result}</span>
			<span>Kullanılacak aks voltajı: {result}</span> */}
			{arr && <Table style={{margin: '0 100px', borderRadius: '10px', borderBottom: 'none' }} columns={columns} dataSource={arr} pagination={false}  />}
		</div>
	);
}

export default ResultPart;