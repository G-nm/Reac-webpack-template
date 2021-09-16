export const Home = () => {
	const [set, setSomething] = React.useState(0);

	return (
		<>
			<div>{set}</div>
			<button onClick={() => setSomething(set + 1)}>Add 1</button>
		</>
	);
};
