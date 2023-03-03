/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
const Rate = () => {
const [rate, setRate] = useState(0);
return (
	<Container>
	{[...Array(5)].map((item, index) => {
		const givenRating = index + 1;
		return (
		<label>
			<Radio
			key="value"
			type="radio"
			value={givenRating}
			onClick={() => {
				setRate(givenRating);
			}}
			/>
			<Rating>
			<FaStar
				color={
				givenRating < rate || givenRating === rate 
					? "#F6D021"
					: "rgb(192,192,192)"
				}
			/>
			</Rating>
		</label>
		);
	})}
	</Container>
);
};

export default Rate;
