import Article from "../article/Article";


const Main = () => {
    return (
        <section className="pt-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    <Article
                    icon= "bi bi-collection"
                    title= "Tikrai taip"
                    description= "Nu 100% esu patenkintas."
                    />
                    <Article
                        icon= "bi bi-cloud-download"
                        title= "Kazkaip taip"
                        description= "Manau bus neblogai."
                    />
                    <Article
                        icon= "bi bi-card-heading"
                        title= "O gal ir taip"
                        description= "Bet gal ir ne taip."
                    />
                    <Article icon= "bi bi-bootstrap"
                             title= "Nezinau"
                             description= "Tiesiog neisivaizduoju kaip atlikti."
                    />
                    <Article
                        icon= "bi bi-code"
                        title= "Galbut"
                        description= "Dar nesu tiksliai isitikines."
                    />
                    <Article
                        icon= "bi bi-patch-check"
                        title= "Per daug"
                        description= "Visko tiesiog per daug."
                    />
                </div>
            </div>
        </section>
    )
}

export default Main
