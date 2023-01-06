import { Skeleton } from '@mui/material'
import React from 'react'

const HeroSkeleton = () => {

    const stepsData = [
        {
            id: 1,
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        }
    ]

    const featuresDatas = [
        {
            id: 1,
        },
        {
            id: 2
        },
        {
            id: 3,
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        {
            id: 7
        },
        {
            id: 8
        }
    ]

    const faqData = [
        {
            id: 1,
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        }
    ]
    return (
        <div className="heroskeleton">
            <section className='banner'>
                <div className='' >
                    <div className=''>
                        <div style={{ flexDirection: "column", width: "100%", padding: "20px 20px", justifyContent: "center", display: "flex", gap: "40px" }} className='left'>
                            <Skeleton variant="rounded" height={700} style={{ width: "calc(100vw - 62px)" }} />
                        </div>
                    </div>
                </div>
            </section>

            <section class="timeline" id="timeline">
                <div class="container text-center">
                    <div class="timeline_wrap text-center">
                        <h2
                            className="section-title mt-4" style={{ maxWidth: "700px" }}
                        >
                            <Skeleton variant="rounded" height={51} width={700} style={{ marginBottom: "5px" }} />
                            <Skeleton variant="rounded" height={51} width={610} style={{ margin: "auto" }} />

                        </h2>
                        <div class="row mt-5 pt-0 pt-md-5 gx-0">
                            {stepsData.map((data, i) => {
                                if (i % 2 === 0) {
                                    return (
                                        <>
                                            <div class={`col-lg-10 offset-lg-1 timeline_left timeline_main`}>
                                                <div class="row justify-content-center align-items-center">
                                                    <div class="col-10 col-lg-5 d-none d-lg-block timeline-date">
                                                        <div
                                                            className="feature-box mb-5"
                                                            style={{
                                                                height: "320px",
                                                                width: "268px"
                                                            }}
                                                        >
                                                            <Skeleton variant="circular" height={50} width={50} className='mx-auto mb-2' />
                                                            <Skeleton variant="square" height={40} width={231} className='mb-3' />
                                                            <Skeleton variant="rounded" height={72} width={231} />

                                                        </div>
                                                    </div>
                                                    <div class="col-2 timeline_dot">
                                                        <span>{i + 1}</span>
                                                        <div className="line-div"></div>
                                                    </div>
                                                    <div class="col-10 col-lg-5 timeline-text">
                                                        <div class="d-block d-lg-none timeline-date">
                                                            <div
                                                                className="feature-box mb-5"
                                                                style={{
                                                                    height: "320px",
                                                                    width: "268px"
                                                                }}
                                                            >
                                                                <Skeleton variant="circular" height={50} width={50} className='mx-auto mb-2' />
                                                                <Skeleton variant="square" height={40} width={231} className='mb-3' />
                                                                <Skeleton variant="rounded" height={72} width={231} />

                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    );
                                } else {
                                    return (
                                        <>
                                            <div
                                                class={`col-lg-10 offset-lg-1 ${i === stepsData.length - 1 ? "" : "timeline_right"
                                                    } timeline_main`}
                                            >
                                                <div class="row justify-content-center align-items-center">
                                                    <div class="col-10 col-lg-5 order-2 order-lg-1 timeline-text">
                                                        <div class="d-block d-lg-none timeline-date">
                                                            <div
                                                                className="feature-box mb-5"
                                                                style={{
                                                                    height: "320px",
                                                                    width: "268px"
                                                                }}
                                                            >
                                                                <Skeleton variant="circular" height={50} width={50} className='mx-auto mb-2' />
                                                                <Skeleton variant="square" height={40} width={231} className='mb-3' />
                                                                <Skeleton variant="rounded" height={72} width={231} />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-2 timeline_dot order-1 order-lg-2">
                                                        <span>{i + 1}</span>
                                                    </div>
                                                    <div class="col-10 col-lg-5 d-none d-lg-block order-3  timeline-date">
                                                        <div
                                                            className="feature-box mb-5"
                                                            style={{
                                                                height: "320px",
                                                                width: "268px"
                                                            }}
                                                        >
                                                            <Skeleton variant="circular" height={50} width={50} className='mx-auto mb-2' />
                                                            <Skeleton variant="square" height={40} width={231} className='mb-3' />
                                                            <Skeleton variant="rounded" height={72} width={231} />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="page-section  my-4 py-5"
            >
                <div className="container">
                    <h2
                        className="section-title-small text-center d-flex justify-content-center"
                    >
                        <Skeleton variant="rounded" height={62} width={655} />

                    </h2>
                    <div className="mt-4 text-center d-flex justify-content-center">
                        <Skeleton variant="rounded" height={70} width={191} />

                    </div>
                </div>
            </section>
            <section className="page-section section-features" id="features">
                <div className="container">
                    <h2
                        className="section-title text-center"
                    >
                        <span className="sub-highlight mb-5">
                            <Skeleton variant="rectangular" height={61} width={287} className='mx-auto mb-2' />

                        </span>
                    </h2>
                    <div className="row">
                        {featuresDatas.map((data, index) => (
                            <div className="col-lg-3 col-md-6 d-flex flex-column ">
                                <div className="feature-box mb-5" style={{
                                    height: "320px",
                                    width: "268px"
                                }}>
                                    <Skeleton variant="circular" height={77} width={76} className='mx-auto mb-2' />
                                    <Skeleton variant="square" height={40} width={231} className='mb-3' />
                                    <Skeleton variant="rounded" height={140} width={231} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section
                className="page-section p-4 p-md-5 mt-5"
            >
                <div className="container">
                    <h2
                        className="section-title-small text-center d-flex justify-content-center"
                    >
                        <Skeleton variant="rounded" height={62} width={655} />

                    </h2>
                    <div className="mt-4 text-center d-flex justify-content-center">
                        <Skeleton variant="rounded" height={70} width={191} />

                    </div>
                </div>
            </section>
            <section className="page-section section-faq" id="faq">
                <div className="container">
                    <div className="faq_wrap">
                        <div className="row">
                            <div className="col-12 col-lg-6 faq_left">
                                <h2
                                    className="heading"
                                >
                                    <Skeleton variant="rounded" height={62} width={447} />
                                    {/* {faqData.heading} */}
                                </h2>
                                <p
                                    className="text"
                                >
                                    <Skeleton variant="rounded" height={183} width={447} />
                                    {/* {faqData.content} */}
                                </p>
                            </div>
                            <div className="col-12 col-lg-6 faq_right mb-5">
                                {faqData.map((item, i) => (
                                    <>

                                        {/* {item.question} */}
                                        <Skeleton variant="rounded" height={62} width={655}  style={{marginBottom:"38px"}}/>
                                               
                                    </>
                                ))}
                        </div>
                    </div>
                </div>
        </div>
            </section >
        </div >
    )
}

export default HeroSkeleton