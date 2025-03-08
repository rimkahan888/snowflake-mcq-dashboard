"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { type FlashcardData, flashcardsData } from "@/data/flashcards-data"

export function Flashcards() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showAnswers, setShowAnswers] = useState(false)
  const [filteredCards, setFilteredCards] = useState<FlashcardData[]>(flashcardsData)
  const [activeTab, setActiveTab] = useState("all")
  const [isScrolled, setIsScrolled] = useState(false)

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("flashcard-favorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("flashcard-favorites", JSON.stringify(favorites))
  }, [favorites])

  // Add scroll event listener to track when user scrolls past the original toggle
  useEffect(() => {
    const handleScroll = () => {
      // Get the position of the original toggle section
      const headerHeight = 150 // Approximate height of the header section
      setIsScrolled(window.scrollY > headerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Filter cards based on search query and active tab
  useEffect(() => {
    let result = flashcardsData

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (card) =>
          card.question.toLowerCase().includes(query) ||
          card.options.some((option) => option.text.toLowerCase().includes(query)),
      )
    }

    // Filter by tab
    if (activeTab === "favorites") {
      result = result.filter((card) => favorites.includes(card.id))
    }

    setFilteredCards(result)
  }, [searchQuery, favorites, activeTab])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]))
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <div className="container mx-auto py-6 px-4">
      {/* Sticky toggle that appears when scrolled */}
      {isScrolled && (
        <div className="fixed top-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-sm border-b w-full shadow-sm">
          <div className="container mx-auto flex justify-end">
            <div className="flex items-center space-x-2">
              <Switch id="sticky-show-answers" checked={showAnswers} onCheckedChange={setShowAnswers} />
              <Label htmlFor="sticky-show-answers">Show Answers</Label>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0 mb-6">
        <h1 className="text-2xl font-bold">Snowflake MCQ Flashcards</h1>
        <div className="flex items-center space-x-2">
          <Switch id="show-answers" checked={showAnswers} onCheckedChange={setShowAnswers} />
          <Label htmlFor="show-answers">Show Answers</Label>
        </div>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-6">
        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="all">All Cards ({flashcardsData.length})</TabsTrigger>
            <TabsTrigger value="favorites">Favorites ({favorites.length})</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCards.map((card) => (
          <Card key={card.id} className="flex flex-col overflow-hidden">
            <div className="p-4 flex-1">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="mb-2">
                  Question {card.id}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 ${favorites.includes(card.id) ? "text-yellow-500" : "text-gray-300"}`}
                  onClick={() => toggleFavorite(card.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={favorites.includes(card.id) ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </Button>
              </div>
              <p className="text-sm mb-4">{card.question}</p>
              <ul className="space-y-2">
                {card.options.map((option, index) => (
                  <li
                    key={index}
                    className={`text-sm p-2 rounded-md ${
                      showAnswers && option.correct ? "bg-green-100 dark:bg-green-900" : "bg-gray-100 dark:bg-gray-800"
                    }`}
                  >
                    <span className="font-medium mr-2">{option.label}.</span>
                    {option.text}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      {filteredCards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No flashcards found. Try adjusting your search.</p>
        </div>
      )}
    </div>
  )
}

