
function managerTemplate (data){
    return`<div class="card">
    <div class="cardheader">
        <h2>${data.getName()}</h2>
        <h2><i class="fas fa-user-graduate"></i>Manager</h2>
    </div>
    <div class="cardbody">
        <table>
            <tr>
                <td>ID: ${data.getID()}</td>
            </tr>
            <tr>
                <td>Email: ${data.getEmail()}</td>
            </tr>
            <tr>
                <td>Office Number: ${data.getOfficeNumber()}</td>
            </tr>
        </table>
    </div>
</div>`
}
module.exports = managerTemplate;