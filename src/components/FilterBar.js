
function FilterBar(props)
{
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    function filterHandler(title)
    {
        setCategory(title);
    }
    return(
         <div className="Filter">
             {
                    filterData.map(
                        (data)=>{
                            return <button className={data.title===category?"btn-active":"btn"} key={data.id} onClick={()=>filterHandler(data.title)}>{data.title}</button>
                        }
                    )
                }
                 
         </div>
    );
}
export default FilterBar;