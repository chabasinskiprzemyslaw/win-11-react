"use client"

import { useState, useEffect } from "react"
import Tweet from "../components/Tweet"

function Home() {
  const [tweets, setTweets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [tweetText, setTweetText] = useState("")

  useEffect(() => {
    const loadTweets = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        // Get necessary data from localStorage
        const scenarioId = localStorage.getItem("selected_scenario")
        const userInfo = JSON.parse(localStorage.getItem("user_info"))
        const userIdentityId = userInfo?.id
        
        if (!scenarioId || !userIdentityId) {
          throw new Error("Missing required information (scenario or user identity)")
        }
        
        // In this example, we're using the same userIdentityId as the authorUserId
        // In a real app, this might be different or configurable
        const authorUserId = userIdentityId
        
        // Construct the URL with query parameters
        const url = `https://localhost:5001/api/social-media/feed?authorUserId=${encodeURIComponent(authorUserId)}&scenarioId=${encodeURIComponent(scenarioId)}&userIdentityId=${encodeURIComponent(userIdentityId)}`
        
        const response = await fetch(url)
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.detail || "Failed to fetch social media feed")
        }
        
        const data = await response.json()
        setTweets(data.items || [])
        setIsLoading(false)
      } catch (error) {
        console.error("Error loading tweets:", error)
        setError(error.message)
        setIsLoading(false)
      }
    }

    loadTweets()
  }, [])

  const handleTweetSubmit = (e) => {
    e.preventDefault()

    if (!tweetText.trim()) return

    const newTweet = {
      id: Date.now().toString(),
      user: {
        name: "Current User",
        handle: "currentuser",
        verified: false,
        avatar: "https://via.placeholder.com/48",
      },
      text: tweetText,
      time: "now",
      likes: 0,
      retweets: 0,
      replies: 0,
      isRetweet: false,
      isReply: false
    }

    setTweets([newTweet, ...tweets])
    setTweetText("")
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>Home</h2>
      </div>

      <div className="compose-tweet">
        <div className="compose-avatar">
          <img src="https://via.placeholder.com/48" alt="Your avatar" />
        </div>

        <form onSubmit={handleTweetSubmit} className="compose-form">
          <textarea
            placeholder="What's happening?"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            maxLength={280}
          />

          <div className="compose-actions">
            <button type="submit" disabled={!tweetText.trim()}>
              Tweet
            </button>
          </div>
        </form>
      </div>

      <div className="tweets-container">
        {isLoading ? (
          <div className="loading">Loading tweets...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : tweets.length === 0 ? (
          <div className="no-tweets">No tweets found</div>
        ) : (
          tweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
        )}
      </div>
    </div>
  )
}

export default Home