function SecondPage() {
    const reloadWindow = () => {
        window.location.reload();
    }

    return (
        <div className="second-page ">
            <div className="rotate d-flex flex-column">
                <div className="d-flex">
                    <a href="#" className="link"><h4>Services</h4></a>
                    <a href="#" className="link"><h4>About Us</h4></a>
                    <a href="#" className="link"><h4>Contacts</h4></a>
                    <a href="#" className="link" style={{paddingLeft: '15%'}} onClick={reloadWindow}><h4>Corapid</h4></a>
                </div>
                <hr className="horisontal-rule"/>
            </div>
        </div>    
    );
}

export default SecondPage;