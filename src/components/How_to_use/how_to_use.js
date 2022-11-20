import React from "react";
import "./how_to_use.css"

const how_to_use = () => { 
    return(
    <div className="how_to_use">
        <img src="https://uploads-ssl.webflow.com/622b267ad39ecd2f2eeac8bb/6332e470821edf27b81bf934_Mask-group%20(3).webp" loading="lazy" width="800" height="450" sizes="(max-width: 991px) 100vw, 68vw" srcset="https://uploads-ssl.webflow.com/622b267ad39ecd2f2eeac8bb/6332e470821edf27b81bf934_Mask-group%20(3)-p-500.webp 500w, https://uploads-ssl.webflow.com/622b267ad39ecd2f2eeac8bb/6332e470821edf27b81bf934_Mask-group%20(3)-p-800.webp 800w, https://uploads-ssl.webflow.com/622b267ad39ecd2f2eeac8bb/6332e470821edf27b81bf934_Mask-group%20(3)-p-1080.webp 1080w, https://uploads-ssl.webflow.com/622b267ad39ecd2f2eeac8bb/6332e470821edf27b81bf934_Mask-group%20(3)-p-1600.webp 1600w, https://uploads-ssl.webflow.com/622b267ad39ecd2f2eeac8bb/6332e470821edf27b81bf934_Mask-group%20(3)-p-2000.webp 2000w, https://uploads-ssl.webflow.com/622b267ad39ecd2f2eeac8bb/6332e470821edf27b81bf934_Mask-group%20(3).webp 2045w" alt="" className="howtoImg"></img>
        <div className="how_to_use_right">
            <div className="reverse">
                <div className="content">
                    <h2 className="blackText">1- Talebini Oluştur</h2>
                    <p className="paragraph">İhtiyacına özel soruları cevapla</p>
                </div>
                <div className="content">
                    <h2 className="blackText">2- Ücretsiz Fiyat Teklifleri Al</h2>
                    <p className="paragraph">100'den fazla merkezden ihtiyacına özel uygun fiyat teklifleri al</p>
                </div>
                <div className="content">
                    <h2 className="blackText">3- Karşılaştır ve Seç</h2>
                    <p className="paragraph">En uygun fiyat ve kaliteyi tercih et.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default how_to_use; 