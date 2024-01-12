import { formatTimestamp } from '../../utils/dateUtils';
import './HistoryItem.css';

export default function HistoryItem({item, onSearch, onRemove}) {
	return(
		<div className="item">
			<div className="left">
				<div className="name">{ item.name }, {item.sys.country}</div>
				<div className="date">{ formatTimestamp(item.dt) }</div>
			</div>
			<div className="right">
				<button onClick={() => onSearch(item)}>
					<span className="material-symbols-outlined">search</span>
				</button>
				<button onClick={() => onRemove(item.id)}>
					<span className="material-symbols-outlined">delete</span>
				</button>
			</div>
		</div>
	);
}