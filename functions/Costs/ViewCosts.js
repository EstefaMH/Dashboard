


const ViewCosts = async () => {

    let data = await getCosts();
    console.log(data)
    let section = document.getElementById("costs")






    return (
        <div class="card-body">
            <table id="datatablesSimple">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Costo</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Costo</th>
                    </tr>
                </tfoot>
                <tbody>

                    <tr>
                        <td>Michael Silva</td>
                        <td>Marketing Designer</td>
                        <td>London</td>
                        <td>66</td>
                        <td>2012/11/27</td>
                        <td>$198,500</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
