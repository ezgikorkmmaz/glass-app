import React, { useState } from 'react';
import { Select, Button, Input } from 'antd';
import './style.scss';
import ResultPart from '../ResultPart';

const { Option } = Select;

const FormPart = () => {
	const [glassShape, setGlassShape] = useState();
	const [glassType, setGlassType] = useState();
	const [upperLine, setUpperLine] = useState();
	const [lowerLine, setLowerLine] = useState();
	const [lineCount, setLineCount] = useState();
	const [result, setResult] = useState();
	const [shownResult, setShownResult] = useState();
	const [arrayVal, setArrayVal] = useState([]);

	
	const calculateFunc = () =>{
		const arr = Array.from({length: lineCount}, (_, index) => index + 1);
		const finalFirst = arr.map((elem) => ((elem - 1) * (lowerLine - upperLine)) / (lineCount - 1));
		const finalLast = finalFirst.map((elem) => parseInt(elem,10) + parseInt(lowerLine,10));
		const resultTableVal = finalLast.map((elem) => elem /100);
		setArrayVal(resultTableVal);
		const sumAll = finalLast.reduce((partialSum, a) => partialSum + a, 0);
		setShownResult(sumAll);
		setResult(sumAll/1000);
	};

	const handleInput = (e, line) => {
		if(line === 'upper'){
			setUpperLine(e.target.value);
		} else{
			setLowerLine(e.target.value);
		}
	}

	const handleLineCount = (e) => {
		setLineCount(e.target.value);
	}

	return (
		<div className="all-page">
		<div className="menu">
		<div className="menu-part-one">
			<span style={{ marginRight: '20px'}}>Cam Şekli</span>
			<Select
				onChange={(val) => setGlassShape(val)}
				style={{width: 200}}
			>
				<Option key={'dikdortgen'}>
					Dikdörtgen
				</Option>
				<Option key={'yamuk'}>
					Yamuk
				</Option>
			</Select>
			</div>
			<div className="menu-part-one">
			<span style={{ marginRight: '20px'}}>Cam Tipi</span>
			<Select
				onChange={(val) => setGlassType(val)}
				style={{width: 200}}
			>
				<Option key={'duzcam'}>
					Düz Cam
				</Option>
				<Option key={'kavisli'}>
					Kavisli Cam
				</Option>
			</Select>
			</div>
			<div className="menu-part-one">
			<span style={{ marginRight: '16px'}}>Tel Sayısı</span>
			<Input defaultValue={lineCount} onChange={(e) => handleLineCount(e)} style={{width: 200}} />
			</div>
			<div className="menu-part-two">
				<div className="tel-say">
					<span style={{margin: '5px 10px'}}>Üst Tel Uzunluğu(cm)</span>
					<Input defaultValue={upperLine} onChange={(e) => handleInput(e, 'upper')} style={{width: 100}} />
					</div>
					<div className="tel-say"><span style={{margin: '5px 20px'}}>Alt Tel Uzunluğu(cm)</span>
					<Input defaultValue={lowerLine} onChange={(e) => handleInput(e, 'lower')} style={{width: 100}} />
				</div>
			</div>
			<Button onClick={calculateFunc} className="calculate-btn">Hesapla</Button>
			<span style={{marginTop: '20px'}}>Tellerin toplam uzunluğu: {shownResult}</span>
		</div>
		<ResultPart arrayVal={arrayVal} result={result} glassType={glassType} />
		</div>
	);
}

export default FormPart;