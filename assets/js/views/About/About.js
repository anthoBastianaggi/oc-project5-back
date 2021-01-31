import React, { useRef, useState, useEffect } from 'react';
import './About.module.scss';
import Button from '../../components/Button/Button';
import Widget from '../../components/Widget/Widget';
import SidebarWidget from '../../components/Widget/SidebarWidget/SidebarWidget';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import cs from 'classnames';
import Identity from './sections/Identity/Identity';
import Address from './sections/Address/Address';
import Internet from './sections/Internet/Internet.';
import { aboutSection } from '../../server/services/about';
import Flex from '../../components/Flex/Flex';
import Title from '../../components/Title/Title';

const About = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [dataIdentity, setDataIdentity] = useState({ firstname: null, lastname: null, birthdate: null, profile: null, status: null, description: null });
    const [dataAddress, setDataAddress] = useState({ address: null, postal_code: null, city: null, country: null });
    const [dataInternet, setDataInternet] = useState({ email: null });
    const [imageValue, setImage] = useState(null);
    const [altValue, setAlt] = useState(null);
    const [visualCv, setVisualCv] = useState(null);
    const [downloadCv, setDownloadCv] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const container = useRef();

    function openSidebarWidget() {
        setOpen(true);
    }

    function closeSidebarWidget() {
        setOpen(false);
    }

    function setSidebarWidgetRef(ref) {
        container.current = ref;
    }

    function handleIdentityUpdate(e) {
        const value = e.target.value;
        setDataIdentity({ ...dataIdentity, [e.target.name]: value });
    };

    function handleIdentityBirthdateUpdate(e) {
        const month = e.getMonth() +1;
        const day = e.getDate();
        const value = month + '/' + day + '/' + e.getFullYear();  
        const date = new Date(`${value} GMT`);
       
        setDataIdentity({ ...dataIdentity, ["birthdate"]: date }) 
    }

    function handleAddressUpdate(e) {
        const value = e.target.value
        setDataAddress({ ...dataAddress, [e.target.name]: value })
    };

    function handleInternetUpdate(e) {
        const value = e.target.value
        setDataInternet({ ...dataInternet, [e.target.name]: value })
    };

    function aboutUpdate() {
        data.map((firstname, lastname, birthdate, profile, status, description, address, postal_code, city, country, email, image, alt, visual_cv, download_cv) => {
            if( dataIdentity.firstname !== null && dataIdentity.firstname !== firstname
                || dataIdentity.lastname !== null && dataIdentity.lastname !== lastname
                || dataIdentity.birthdate !== null &&  dataIdentity.birthdate !== birthdate
                || dataIdentity.profile !== null && dataIdentity.profile !== profile
                || dataIdentity.status !== null && dataIdentity.status !== status
                || dataIdentity.description !== null && dataIdentity.description !== description
                || dataAddress.address !== null && dataAddress.address !== address
                || dataAddress.postal_code !== null && dataAddress.postal_code !== postal_code
                || dataAddress.city !== null && dataAddress.city !== city
                || dataAddress.country !== null && dataAddress.country !== country
                || dataInternet.email !== null && dataInternet.email !== email
                || imageValue !== null && imageValue !== image
                || altValue !== null && altValue !== alt
                || visualCv !== null && visualCv !== visual_cv
                || downloadCv !== null && downloadCv !== download_cv 
            ) {
                aboutSection.updateAbout(
                    dataIdentity.firstname,
                    dataIdentity.lastname,
                    dataIdentity.birthdate,
                    dataIdentity.profile,
                    dataIdentity.status,
                    dataIdentity.description,
                    dataAddress.address,
                    dataAddress.postal_code,
                    dataAddress.city,
                    dataAddress.country,
                    dataInternet.email,
                    imageValue,
                    altValue,
                    visualCv,
                    downloadCv
                );
                setShowMessage(true);
                window.setTimeout("location=('/about');", 2000);
            }
        })
    };

    async function dataAbout() {
        await aboutSection.getAbout().then(result => setData(result))
    }
    useEffect(() => {
       dataAbout()
    }, []);

    return (
        <>
        {showMessage && <span className="success-message"><strong>Succès !</strong> Les données à propos de moi ont bien été mise à jour !</span>}
        <SidebarWidget 
            className={cx("sidebar-widget", "sidebar-widget-about", { ["active"]: open })}
            setSidebarWidgetRef={setSidebarWidgetRef}
            opened={open} 
            onClose={closeSidebarWidget}
        >
            <Widget id="image-about" label="Image à propos de moi">
                <label className="label-widget">Ajouter le lien de l'image</label>
                <input 
                className={cs("input-widget", "input-image")} 
                placeholder="mon-image.jpg" 
                defaultValue={data.map(({ image }) => image )}  
                onChange={(e) => { setImage(e.target.value) }} 
                />

                <label className="label-widget">Ajouter le text alternative</label>
                <input 
                className="input-widget" 
                placeholder="Text alternative" 
                defaultValue={data.map(({ alt }) => alt )}
                onChange={(e) => { setAlt(e.target.value) }} 
                />
            </Widget>
            <Widget id="lien-visualisation" label="Lien visualisation du cv">
                <label className="label-widget">Ajouter le lien pour visualiser le cv</label>
                <input className="input-widget" placeholder="http://mon-cv.fr" defaultValue={data.map(({ visual_cv }) => visual_cv )} onChange={(e) => { setVisualCv(e.target.value) }} />
            </Widget>
            <Widget id="lien-telechargement" label="Lien téléchargement du cv">
                <label className="label-widget">Ajouter le lien pour télécharger le cv</label>
                <input className="input-widget" placeholder="http://mon-telechargement-cv.fr" defaultValue={data.map(({ download_cv }) => download_cv )} onChange={(e) => { setDownloadCv(e.target.value) }} />
            </Widget>
        </SidebarWidget>
        <div className="wrap">
            <Flex className="about-header">
                <Flex className="about-settings" end>
                    <Flex className="button-update-about" center>
                        <Button variant="primary" type="button" label="Modifier" className="btn-update-about" onClick={(e) => { aboutUpdate(e) }} />
                    </Flex>
                    <Flex className="button-widget" center>
                        <Button variant="tertiary" type="button" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} />
                    </Flex>
                </Flex>  
                <Flex className="about-title">
                    <Title as="h1" stylesTitle="stylesH1" className="title">À propos de moi</Title>
                </Flex>  
            </Flex>
            {data !== undefined && data.map((user) => (
            <Flex key={user.id} className="content-about">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <Identity user={user} onIdentityUpdate={handleIdentityUpdate} onIdentityBirthdateUpdate={handleIdentityBirthdateUpdate} values={dataIdentity} />
                    <Address user={user} onAddressUpdate={handleAddressUpdate} values={dataAddress} />
                    <Internet user={user} onInternetUpdate={handleInternetUpdate} values={dataInternet} />
                </div>
                <div className="content-widget">
                    <Widget id="image-about" label="Image à propos de moi">
                        <label className="label-widget">Ajouter le lien de l'image</label>
                        <input 
                        className={cs("input-widget", "input-image")} 
                        placeholder="mon-image.jpg" 
                        defaultValue={user.image}  
                        onChange={(e) => { setImage(e.target.value) }} 
                        />

                        <label className="label-widget">Ajouter le text alternative</label>
                        <input 
                        className="input-widget" 
                        placeholder="Text alternative" 
                        defaultValue={user.alt}
                        onChange={(e) => { setAlt(e.target.value) }} 
                        />
                    </Widget>
                    <Widget id="lien-visualisation" label="Lien visualisation du cv">
                        <label className="label-widget">Ajouter le lien pour visualiser le cv</label>
                        <input className="input-widget" placeholder="http://mon-cv.fr" defaultValue={user.visual_cv} onChange={(e) => { setVisualCv(e.target.value) }} />
                    </Widget>
                    <Widget id="lien-telechargement" label="Lien téléchargement du cv">
                        <label className="label-widget">Ajouter le lien pour télécharger le cv</label>
                        <input className="input-widget" placeholder="http://mon-telechargement-cv.fr" defaultValue={user.download_cv} onChange={(e) => { setDownloadCv(e.target.value) }} />
                    </Widget>
                </div>
            </Flex>
            ))}
        </div>
        </>
    )
}
    
export default About;