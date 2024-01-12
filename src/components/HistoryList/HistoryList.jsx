import './HistoryList.css';

export default function History({children}) {
	return(
	<div className="history-wrapper">
		<h2>Search History</h2>
		<div className="history-item-wrapper">
			{children}
		</div>
	</div>
	);
}