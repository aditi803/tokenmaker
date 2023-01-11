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
            <section
                className="page-section hero d-md-flex align-items-center mb-4 mb-lg-0"
                id="hero"
                style={{ background: "none"
                }}
            >
                <div className="container self">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 >
                                <span className="sub-highlight">
                                    <Skeleton variant="rounded" height={39} width={500} className=" mx-auto" />
                                    {/* <Skeleton variant="rounded" height={60} width={200} style={{marginLeft:"0 !important"}}/> */}
                                </span>
                            </h1>
                            <div className="my-2">
                                <p
                                    className=""
                                >
                                 <Skeleton variant="rounded" height={10} width={487} className="mb-2" />
                                    <Skeleton variant="rounded" height={10} width={480} className="mb-2" />   
                                    <Skeleton variant="rounded" height={10} width={480} className="mb-2" />   
                                    <Skeleton variant="rounded" height={10} width={210} className="mb-2" />   
                                </p>
                            </div>
                            <div className="my-2">
                                {/* <Link
                          className="blue-btn btn"
                          to="/generator"
                          style={{
                            backgroundColor: `${banner.buttonBackgroundColor}`,
                            color: `${banner.buttonTextColor}`,
                          }}
                        >
                        </Link> */}
                        <Skeleton variant="rounded" height={40} width={180} className="mb-2" />  
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="banner-side-image" alt="" />
                            <Skeleton variant="rounded" height={403} width={480} className="mb-2" />  
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
                            <Skeleton variant="rounded" height={16} width={500} className="mb-3 mx-auto" />
                            <Skeleton variant="rounded" height={16} width={200} className=" mx-auto" />

                        </h2>
                        <div class="row mt-5 pt-0 pt-md-5 gx-0">
                            {stepsData.map((data, i) => {
                                if (i % 2 === 0) {
                                    return (
                                        <>
                                            <div class={`col-lg-10 offset-lg-1 timeline_left timeline_main`} key={data.id}>
                                                <div class="row justify-content-center align-items-center">
                                                    <div class="col-10 col-lg-5 d-none d-lg-block timeline-date">
                                                        <div
                                                            className="feature-box mb-5"
                                                            style={{
                                                                height: "320px",
                                                                width: "268px"
                                                            }}
                                                        >
                                                            <Skeleton variant="circular" height={64} width={64} className='mx-auto mb-2' />
                                                            <Skeleton variant="square" height={14} width={190} className='mt-3 mb-4 mx-auto' />
                                                            <Skeleton variant="rounded" height={10} width={200} className='mb-2 mx-auto' />
                                                            <Skeleton variant="rounded" height={10} width={180} className='mb-2 mx-auto' />
                                                            <Skeleton variant="rounded" height={10} width={160} className='mb-2 mx-auto' />

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
                                                                <Skeleton variant="circular" height={64} width={64} className='mx-auto mb-2' />
                                                                <Skeleton variant="square" height={14} width={190} className='mt-3 mb-4 mx-auto' />
                                                                <Skeleton variant="rounded" height={10} width={200} className='mb-2 mx-auto' />
                                                                <Skeleton variant="rounded" height={10} width={180} className='mb-2 mx-auto' />
                                                                <Skeleton variant="rounded" height={10} width={160} className='mb-2 mx-auto' />

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
                                                    key={data.id}
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
                                                                <Skeleton variant="circular" height={64} width={64} className='mx-auto mb-2' />
                                                                <Skeleton variant="square" height={14} width={190} className='mt-3 mb-4 mx-auto' />
                                                                <Skeleton variant="rounded" height={10} width={200} className='mb-2 mx-auto' />
                                                                <Skeleton variant="rounded" height={10} width={180} className='mb-2 mx-auto' />
                                                                <Skeleton variant="rounded" height={10} width={160} className='mb-2 mx-auto' />

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
                                                            <Skeleton variant="circular" height={64} width={64} className='mx-auto mb-2' />
                                                            <Skeleton variant="square" height={14} width={190} className='mt-3 mb-4 mx-auto' />
                                                            <Skeleton variant="rounded" height={10} width={200} className='mb-2 mx-auto' />
                                                            <Skeleton variant="rounded" height={10} width={180} className='mb-2 mx-auto' />
                                                            <Skeleton variant="rounded" height={10} width={160} className='mb-2 mx-auto' />

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
                        <Skeleton variant="rounded" height={20} width={655} />

                    </h2>
                    <div className="mt-4 text-center d-flex justify-content-center">
                        <Skeleton variant="rounded" height={36} width={191} />

                    </div>
                </div>
            </section>
            <section className="page-section section-features" id="features">
                <div className="container">
                    <h2
                        className="section-title text-center"
                    >
                        <span className="sub-highlight mb-5">
                            <Skeleton variant="rectangular" height={20} width={190} className='mx-auto mb-2' />

                        </span>
                    </h2>
                    <div className="row">
                        {featuresDatas.map((data, index) => (
                            <div className="col-lg-3 col-md-6 d-flex flex-column " key={data.id}>
                                <div className="feature-box mb-5" style={{
                                    height: "320px",
                                    width: "268px"
                                }}>
                                    <Skeleton variant="circular" height={64} width={64} className='mx-auto mb-3' />
                                    <Skeleton variant="square" height={14} width={190} className='mb-3 mx-auto' />
                                    <Skeleton variant="rounded" height={10} width={231} className="mb-2" />
                                    <Skeleton variant="rounded" height={10} width={231} className="mb-2" />
                                    <Skeleton variant="rounded" height={10} width={231} className="mb-2" />
                                    <Skeleton variant="rounded" height={10} width={231} className="mb-2" />
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
                        <Skeleton variant="rounded" height={20} width={655} />

                    </h2>
                    <div className="mt-4 text-center d-flex justify-content-center">
                        <Skeleton variant="rounded" height={36} width={191} />

                    </div>
                </div>
            </section>
            <section className="page-section section-faq" id="faq">
                <div className="container">
                    <div className="faq_wrap">
                        <div className="row">
                            <div className="col-12 col-lg-6 faq_left mb-4 mb-lg-0">
                                <h2
                                    className="heading mb-4"
                                >
                                    <Skeleton variant="rounded" height={20} width={400} />
                                    {/* {faqData.heading} */}
                                </h2>
                                <Skeleton className='mb-5' variant="rounded" height={8} width={103} />
                                <p
                                    className="text"
                                >
                                    <Skeleton className='mb-3' variant="rounded" height={10} width={447} />
                                    <Skeleton className='mb-3' variant="rounded" height={10} width={430} />
                                    <Skeleton className='mb-3' variant="rounded" height={10} width={447} />
                                    <Skeleton className='mb-3' variant="rounded" height={10} width={420} />
                                    <Skeleton className='mb-3' variant="rounded" height={10} width={450} />
                                    <Skeleton className='mb-3' variant="rounded" height={10} width={200} />
                                    {/* {faqData.content} */}
                                </p>
                            </div>
                            <div className="col-12 col-lg-6 faq_right mb-5">
                                {faqData.map((item, i) => (
                                    <>

                                        {/* {item.question} */}
                                        <Skeleton variant="rounded" height={60} width={630} style={{ marginBottom: "30px" }} key={item.id}/>

                                    </>
                                ))}
                            </div>

                            <div className="col-12  mt-5 text-center">
                                <Skeleton variant="rounded" height={20} width={404} className="mb-4 mx-auto" />
                                <Skeleton variant="rounded" height={36} width={200} className="mb-4 mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default HeroSkeleton