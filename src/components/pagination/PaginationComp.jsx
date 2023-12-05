import StacK from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const PaginationComp = ({ totalPage, page, handlePageChange }) => {
	return (
		<StacK spacing={2}>
			<Pagination sx={{color: "white"}} count={totalPage} page={page} onChange={handlePageChange} />
		</StacK>
	);
};

export default PaginationComp;
