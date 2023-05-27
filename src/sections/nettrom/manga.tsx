"use client"

import { useEffect } from "react"
import { useMangadex } from "../../contexts/mangadex"
import getTitleManga from "../../utils/getTitleManga"
import { formatNowDistance } from "../../utils/dateFns"
import getCoverArt from "../../utils/getCoverArt"
import { Includes } from "../../api/static"
import ChapterList from "./chapterList"

export default function Manga({ mangaId }: { mangaId: string }) {
    const { mangas, updateMangas } = useMangadex()
    const manga = mangas[mangaId]
    useEffect(() => {
        updateMangas({ ids: [mangaId], includes: [Includes.ARTIST, Includes.AUTHOR] })
    }, [])

    if (!manga) return <div>Loading...</div>

    const title = getTitleManga(manga)
    return (
        <div id="ctl00_divCenter" className="center-side col-md-8">
            <ul
                className="breadcrumb"
                itemType="http://schema.org/BreadcrumbList"
            >
                <li
                    itemProp="itemListElement"
                    itemType="http://schema.org/ListItem"
                >
                    <a
                        href="https://www.nettruyento.com"
                        className="itemcrumb"
                        itemProp="item"
                        itemType="http://schema.org/Thing"
                    >
                        <span itemProp="name">Trang chủ</span>
                    </a>
                    <meta itemProp="position" content={"1"} />
                </li>
                <li
                    itemProp="itemListElement"
                    itemType="http://schema.org/ListItem"
                >
                    <a
                        href="https://www.nettruyento.com/tim-truyen"
                        className="itemcrumb"
                        itemProp="item"
                        itemType="http://schema.org/Thing"
                    >
                        <span itemProp="name">Truyện Tranh</span>
                    </a>
                    <meta itemProp="position" content={"2"} />
                </li>
                <li
                    itemProp="itemListElement"
                    itemType="http://schema.org/ListItem"
                >
                    <a
                        href="https://www.nettruyento.com/truyen-tranh/dai-quan-gia-la-ma-hoang-219482"
                        className="itemcrumb active"
                        itemProp="item"
                        itemType="http://schema.org/Thing"
                    >
                        <span itemProp="name">{title}</span>
                    </a>
                    <meta itemProp="position" content={"3"} />
                </li>
            </ul>
            <article id="item-detail">
                <h1 className="title-detail">{title}</h1>
                <time className="small">[Cập nhật lúc: {formatNowDistance(new Date(manga.attributes.updatedAt))}]</time>
                <div className="detail-info">
                    <div className="row">
                        <div className="col-xs-4 col-image">
                            <img
                                src={getCoverArt(manga)}
                                alt={title}
                            />
                        </div>
                        <div className="col-xs-8 col-info">
                            <ul className="list-info">
                                <li className="author row">
                                    <p className="name col-xs-4">
                                        <i className="fa fa-user"></i> Tác giả
                                    </p>
                                    <p className="col-xs-8">{manga.author?.attributes ? manga.author?.attributes.name : "Đang cập nhật"} / {manga.artist?.attributes ? manga.artist?.attributes.name : "Đang cập nhật"}</p>
                                </li>
                                <li className="status row">
                                    <p className="name col-xs-4">
                                        <i className="fa fa-rss"></i> Tình trạng
                                    </p>
                                    <p className="col-xs-8">Đang tiến hành</p>
                                </li>
                                <li className="kind row">
                                    <p className="name col-xs-4">
                                        <i className="fa fa-tags"></i> Thể loại
                                    </p>
                                    <p className="col-xs-8">
                                        <a href="https://www.nettruyento.com/tim-truyen/adventure">
                                            Adventure
                                        </a>{" "}
                                        -{" "}
                                        <a href="https://www.nettruyento.com/tim-truyen/manhua">
                                            Manhua
                                        </a>{" "}
                                        -{" "}
                                        <a href="https://www.nettruyento.com/tim-truyen/truyen-mau-214">
                                            Truyện Màu
                                        </a>
                                    </p>
                                </li>
                                <li className="row">
                                    <p className="name col-xs-4">
                                        <i className="fa fa-eye"></i> Lượt xem
                                    </p>
                                    <p className="col-xs-8">N/A</p>
                                </li>
                            </ul>
                            <div
                                className="mrt5 mrb10"
                                itemType="http://schema.org/Book"
                            >
                                <a href="https://www.nettruyento.com/truyen-tranh/dai-quan-gia-la-ma-hoang-219482">
                                    <span itemProp="name">{title}</span>
                                </a>
                                <span
                                    itemProp="aggregateRating"
                                    itemType="https://schema.org/AggregateRating"
                                >
                                    {" "}
                                    Xếp hạng: <span itemProp="ratingValue">4.1</span>/
                                    <span itemProp="bestRating">5</span> -{" "}
                                    <span itemProp="ratingCount">183860</span> Lượt đánh giá.
                                </span>
                            </div>
                            <div className="row rating">
                                <div className="col-xs-6">
                                    <div
                                        className="star"
                                        data-id={21948}
                                        data-rating="4.1"
                                        data-allowrating="true"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <img
                                            src="//st.nettruyento.com/Data/Sites/1/skins/comic/images/star-on.png"
                                            title="bad"
                                        />
                                        &nbsp;
                                        <img
                                            src="//st.nettruyento.com/Data/Sites/1/skins/comic/images/star-on.png"
                                            title="poor"
                                        />
                                        &nbsp;
                                        <img
                                            src="//st.nettruyento.com/Data/Sites/1/skins/comic/images/star-on.png"
                                            title="regular"
                                        />
                                        &nbsp;
                                        <img
                                            src="//st.nettruyento.com/Data/Sites/1/skins/comic/images/star-on.png"
                                            title="good"
                                        />
                                        &nbsp;
                                        <img
                                            src="//st.nettruyento.com/Data/Sites/1/skins/comic/images/star-off.png"
                                            title="gorgeous"
                                        />
                                        <input type="hidden" name="score" defaultValue="4.1" />
                                    </div>
                                </div>
                                <div
                                    className="col-xs-6 lazy-module"
                                    data-type="facebook"
                                    style={{ overflow: "hidden" }}
                                >
                                    <div
                                        data-share="true"
                                        data-show-faces="true"
                                        data-action="like"
                                        data-layout="button_count"
                                        className="fb-like fb_iframe_widget"
                                        fb-xfbml-state="rendered"
                                        fb-iframe-plugin-query="action=like&app_id=745819368841087&container_width=0&href=http%3A%2F%2Fwww.nettruyen.com&layout=button_count&locale=vi_VN&sdk=joey&share=true&show_faces=true"
                                        data-href="https://www.nettruyen.uk/truyen-tranh/dai-quan-gia-la-ma-hoang-21948"
                                    ></div>
                                </div>
                            </div>
                            <div className="follow">
                                <a
                                    className="follow-link btn btn-success"
                                    href="javascript:void(0)"
                                    data-id={21948}
                                >
                                    <i className="fa fa-heart" /> <span>Theo dõi</span>
                                </a>
                                <span>
                                    <b>446.703</b> Lượt theo dõi
                                </span>
                            </div>
                            <div className="read-action mrt10">
                                <a
                                    className="btn btn-warning mrb5"
                                    href="https://www.nettruyento.com/truyen-tranh/dai-quan-gia-la-ma-hoang/chap-0/459973"
                                >
                                    {" "}
                                    Đọc từ đầu
                                </a>
                                <a
                                    className="btn btn-warning mrb5"
                                    href="https://www.nettruyento.com/truyen-tranh/dai-quan-gia-la-ma-hoang/chap-400/1002325"
                                >
                                    {" "}
                                    Đọc mới nhất
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-content">
                    <h3 className="list-title">
                        <i className="fa fa-file-text-o"></i> Nội dung
                    </h3>
                    <p className="">
                        <a href="/">Truyện tranh</a>{" "}
                        <a href="https://www.nettruyento.com/truyen-tranh/dai-quan-gia-la-ma-hoang-219482">
                            {title}
                        </a>{" "}
                        được cập nhật nhanh và đầy đủ nhất tại NetTruyen. Bạn đọc đừng quên để
                        lại bình luận và chia sẻ, ủng hộ NetTruyen ra các chương mới nhất của
                        truyện{" "}
                        <a href="https://www.nettruyento.com/truyen-tranh/dai-quan-gia-la-ma-hoang-219482">
                            {title}
                        </a>
                        .
                    </p>
                    <a href="#" className="morelink less">
                        <i className="fa fa-angle-left" /> Thu gọn
                    </a>
                </div>
                <ChapterList mangaId={mangaId} />
            </article>
            {/*googleoff: index*/}
            <ul className="nav nav-tabs main-tab lazy-module" data-type="facebook">
                <li className="active">
                    <a data-toggle="tab" href="#nt_comments">
                        <i className="fa fa-comments" /> NetTruyen (
                        <span className="comment-count">107.889</span>)
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="#fb_comments">
                        <i className="fa fa-facebook-official" /> Facebook (
                        <span
                            className="fb-comments-count"
                            data-href="https://www.nettruyen.uk/truyen-tranh/dai-quan-gia-la-ma-hoang-21948"
                        >
                            0
                        </span>
                        )
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="nt_comments" className="tab-pane fade in active">
                    <div
                        className="mrt10"
                        style={{ color: "red", fontSize: 12, fontStyle: "italic" }}
                    >
                        Bình luận không được tính để tăng cấp độ. Tài khoản không bình luận được
                        là do: avatar nhạy cảm, spam link hoặc chưa đủ cấp độ
                    </div>
                    <div className="comment-wrapper">
                        <div className="placeholder">
                            Mời bạn thảo luận, vui lòng không spam, share link kiếm tiền, thiếu
                            lành mạnh,... để tránh bị khóa tài khoản
                        </div>
                        <div id="comment_form" />
                        <div className="mrt10 mrb5">
                            <span className="sort-comments comment-action">
                                <i className="icons" />
                                Mới nhất
                            </span>
                        </div>
                        <div className="comment-list">
                            <div className="item clearfix" id="comment_29433157">
                                <figure className="avatar">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                        alt="Wibu L&#224; Bọn ĐBRR"
                                        className="lazy"
                                        data-original="//st.nettruyento.com/Data/SiteImages/anonymous.png"
                                    />
                                </figure>
                                <div className="summary">
                                    <i className="fa fa-angle-left fa-arrow"></i>
                                    <div className="info">
                                        <div className="comment-header">
                                            <span className="authorname name-5">Wibu Là Bọn ĐBRR</span>
                                            <span className="member level-5">
                                                <span data-level={5}>Cấp 5</span>
                                                <span
                                                    className="progress-bar"
                                                    style={{ width: "5%" }}
                                                ></span>
                                            </span>
                                            <span className="cmchapter">Chapter 399</span>
                                        </div>
                                        <div className="comment-content">
                                            Chap tiếp theo đâu. Đọc đang cuốn
                                        </div>
                                    </div>
                                    <ul className="comment-footer">
                                        <li>
                                            <span>
                                                <i className="fa fa-comment"></i> Trả lời
                                            </span>
                                        </li>
                                        <li>
                                            <span
                                                className="vote-up"
                                            >
                                                <i className="fa fa-thumbs-up"></i>
                                                <span className="vote-up-count">0</span>
                                            </span>
                                        </li>
                                        <li>
                                            <span
                                                className="vote-down"
                                            >
                                                <i className="fa fa-thumbs-down"></i>
                                                <span className="vote-down-count">0</span>
                                            </span>
                                        </li>
                                        <li className="comment-more-wrap">
                                            <span
                                                className="more-action"
                                            >
                                                <i className="fa fa-ellipsis-h"></i>
                                            </span>
                                            <ul
                                                className="comment-more hidden"
                                                id="comment_more_29433157"
                                            >
                                                <li>
                                                    <span>
                                                        Báo vi phạm
                                                    </span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <abbr title="27/05/2023 10:43:18 SA">
                                                <i className="fa fa-clock-o"></i> 1 giây trước
                                            </abbr>
                                        </li>
                                    </ul>
                                    <div id="comment_form_29433157"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            id="ctl00_mainContent_divPager"
                            className="pagination-outter commentpager"
                        >
                            <ul className="pagination">
                                <li className="hidden">Trang 1 / 7193 </li>
                                <li className="active">
                                    <a href="#1" title="Đang hiện kết quả 1 tới 15 / 107889">
                                        1
                                    </a>{" "}
                                </li>
                                <li>
                                    <a href="#2" title="Hiện kết quả 16 tới 30 / 107889">
                                        2
                                    </a>{" "}
                                </li>
                                <li>
                                    <a href="#3" title="Hiện kết quả 31 tới 45 / 107889">
                                        3
                                    </a>{" "}
                                </li>
                                <li>
                                    <a href="#4" title="Hiện kết quả 46 tới 60 / 107889">
                                        4
                                    </a>{" "}
                                </li>
                                <li>
                                    <a href="#5" title="Hiện kết quả 61 tới 75 / 107889">
                                        5
                                    </a>{" "}
                                </li>
                                <li>
                                    <a href="#6" title="Hiện kết quả 76 tới 90 / 107889">
                                        6
                                    </a>{" "}
                                </li>
                                <li>
                                    <a href="#7" title="Hiện kết quả 91 tới 105 / 107889">
                                        7
                                    </a>{" "}
                                </li>
                                <li>
                                    <a href="#8" title="Hiện kết quả 106 tới 120 / 107889">
                                        8
                                    </a>{" "}
                                </li>
                                <li className="PagerSSCCells">
                                    <a href="#1200" title="Hiện kết quả 17986 tới 18000 / 107889">
                                        1200
                                    </a>{" "}
                                </li>
                                <li className="PagerSSCCells">
                                    <a href="#2400" title="Hiện kết quả 35986 tới 36000 / 107889">
                                        2400
                                    </a>{" "}
                                </li>
                                <li className="PagerSSCCells">
                                    <a href="#3600" title="Hiện kết quả 53986 tới 54000 / 107889">
                                        3600
                                    </a>{" "}
                                </li>
                                <li className="PagerSSCCells">
                                    <a href="#4800" title="Hiện kết quả 71986 tới 72000 / 107889">
                                        4800
                                    </a>{" "}
                                </li>
                                <li className="PagerSSCCells">
                                    <a href="#5990" title="Hiện kết quả 89836 tới 89850 / 107889">
                                        5990
                                    </a>{" "}
                                </li>
                                <li className="PagerSSCCells">
                                    <a href="#7190" title="Hiện kết quả 107836 tới 107850 / 107889">
                                        7190
                                    </a>{" "}
                                </li>
                                <li>
                                    <a href="#2" title="Chuyển đến trang 2">
                                        ›
                                    </a>{" "}
                                </li>
                                <li>
                                    <a href="#7193" title="Trang cuối">
                                        »
                                    </a>{" "}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="fb_comments" className="tab-pane fade">
                    <div className="comment">
                        <div
                            className="fb-comments"
                            data-width="100%"
                            data-numposts={5}
                            data-colorscheme="light"
                            data-href="https://www.nettruyen.uk/truyen-tranh/dai-quan-gia-la-ma-hoang-21948"
                        />
                    </div>
                </div>
            </div>
            {/*googleon: index*/}
        </div>
    )
} 