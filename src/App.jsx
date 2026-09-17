import { useState } from 'react'
import './App.css'
import { posts } from './data/blog'
import { jobs } from './data/experience'
import { projects } from './data/projects'
import { socialLinks } from './data/social'

function App() {
  const [activeTab, setActiveTab] = useState('about')
  const [activePostId, setActivePostId] = useState(null)

  const openTab = (tab) => {
    setActiveTab(tab)
    setActivePostId(null)
  }

  const activePost = posts.find((post) => post.id === activePostId) ?? null

  return (
    <main className="page">
      <div className="columns">
        <div aria-hidden="true" />
        <section className="landingCard" aria-label="Intro">
          <h1 className="landingName">Ryan Ma</h1>
          <p className="landingText">
            Professional gamer turned into software engineer and builder
          </p>

          <nav className="tabs" aria-label="Sections">
            <button
              className={`tabButton ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => openTab('about')}
              type="button"
            >
              About
            </button>
            <button
              className={`tabButton ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => openTab('projects')}
              type="button"
            >
              Projects
            </button>
            <button
              className={`tabButton ${activeTab === 'blog' ? 'active' : ''}`}
              onClick={() => openTab('blog')}
              type="button"
            >
              Blog
            </button>
          </nav>

          <div className="tabContent">
            {activeTab === 'about' && (
              <section className="aboutSection">
                <h2 className="aboutHeading">Work Experience</h2>

                <div className="jobList">
                  {jobs.map((job) => {
                    const url = job.link?.trim() ?? ''
                    const hasLink = url.length > 0 && url !== '#'

                    return (
                      <article key={job.id} className="jobCard">
                        <div className="jobCardHeader">
                          <div>
                            <h3 className="jobTitle">
                              {hasLink ? (
                                <a
                                  className="jobTitleLink"
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {job.title}
                                </a>
                              ) : (
                                job.title
                              )}
                            </h3>
                            <p className="jobCompany">{job.company}</p>
                          </div>
                          <span className="jobPeriod">{job.period}</span>
                        </div>
                        <p className="jobDescription">{job.description}</p>
                      </article>
                    )
                  })}
                </div>

                <p className="funFact">
                  Fun fact: I hit Challenger (top 100 NA) in League of Legends
                </p>
              </section>
            )}

            {activeTab === 'projects' && (
              <div className="projectsSection">
                <div className="projectsGrid">
                  {projects.length === 0 && (
                    <p className="projectsEmpty">
                      Add your projects in <code>src/data/projects.js</code>.
                    </p>
                  )}
                  {projects.map((project) => {
                    const url = project.link?.trim() ?? ''
                    const hasLink = url.length > 0 && url !== '#'

                    return (
                      <article key={project.id} className="projectCard">
                        <a
                          className="projectLinkWrap"
                          href={hasLink ? url : '#'}
                          target={hasLink ? '_blank' : undefined}
                          rel={hasLink ? 'noopener noreferrer' : undefined}
                          onClick={(event) => {
                            if (!hasLink) event.preventDefault()
                          }}
                          aria-label={
                            hasLink
                              ? `${project.title} — open project link`
                              : `${project.title} — add a link in projects.js`
                          }
                        >
                          <img src={project.imageUrl} alt={project.title} />
                          <div className="projectMeta">
                            <div className="projectHeader">
                              <h3>{project.title}</h3>
                              <span className="projectDate">{project.date}</span>
                            </div>
                            {project.description && (
                              <p className="projectDescription">{project.description}</p>
                            )}
                          </div>
                        </a>
                      </article>
                    )
                  })}
                </div>
              </div>
            )}

            {activeTab === 'blog' && (
              <section className="blogSection">
                {activePost ? (
                  <article className="blogPost">
                    <button
                      className="blogBack"
                      type="button"
                      onClick={() => setActivePostId(null)}
                    >
                      ← Back to Blog
                    </button>
                    <header className="blogPostHeader">
                      <h2 className="blogPostTitle">{activePost.title}</h2>
                      <span className="blogDate">{activePost.date}</span>
                    </header>
                    <div className="blogPostBody">{activePost.content}</div>
                  </article>
                ) : (
                  <>
                    <h2 className="aboutHeading">Blog</h2>

                    <div className="blogList">
                      {posts.length === 0 && (
                        <p className="blogEmpty">
                          Add your posts in <code>src/data/blog.js</code>.
                        </p>
                      )}
                      {posts.map((post) => (
                        <button
                          key={post.id}
                          className="blogCard"
                          type="button"
                          onClick={() => setActivePostId(post.id)}
                        >
                          <div className="blogCardHeader">
                            <h3 className="blogTitle">{post.title}</h3>
                            <span className="blogDate">{post.date}</span>
                          </div>
                          <p className="blogDescription">{post.description}</p>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </section>
            )}
          </div>

          <div className="socialRow" aria-label="Social and contact links">
            {socialLinks.map((item) => {
              const href = item.href?.trim() ?? ''
              const isHttp = /^https?:\/\//i.test(href)
              const openNewTab = isHttp

              return (
                <a
                  key={item.id}
                  className="socialLink"
                  href={href || '#'}
                  target={openNewTab ? '_blank' : undefined}
                  rel={openNewTab ? 'noopener noreferrer' : undefined}
                  onClick={(event) => {
                    if (!href) event.preventDefault()
                  }}
                  aria-label={item.label}
                >
                  <img
                    className="socialIconImg"
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                  />
                </a>
              )
            })}
          </div>
        </section>
        <div aria-hidden="true" />
      </div>
    </main>
  )
}

export default App
