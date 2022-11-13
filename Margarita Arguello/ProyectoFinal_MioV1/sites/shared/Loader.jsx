function Loader(props) {

    if(props.visible === true) {
        return <>
            <div className="loader d-block">
                <section className="row w-100 h-100 align-items-center justify-content-center">
                    <article className="col text-center">
                        <div className="spinner-border text-info" role="status">
                        </div>
                        <div>
                            <span>Espere un momento...</span>
                        </div>
                    </article>
                </section>
            </div>
        </>
    }

    return <div className="loader d-none"></div>
}