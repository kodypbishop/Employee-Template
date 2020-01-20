
function engineerTemplate (data){
    return`<div class="card">
    <div class="cardheader">
        <h2>${data.getName()}</h2>
        <h2><i class="fas fa-glasses"></i>Engineer</h2>
    </div>
    <div class="cardbody">
        <table>
            <tr>
                <td>ID: ${data.getId()}</td>
            </tr>
            <tr>
                <td>Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></td>
            </tr>
            <tr>
                <td>Github:<a href="https://github.com/${data.getGithub()}"> ${data.getGithub()}</a></td>
            </tr>
        </table>
    </div>
</div>`
}
module.exports = engineerTemplate;