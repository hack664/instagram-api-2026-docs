import React from "react";

export default function InstagramDocs() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold">Instagram API 2026 – RapidAPI Documentation</h1>
      <p className="text-lg">Base URL: <span className="font-mono">https://instagram-api-2026.p.rapidapi.com/</span></p>
      <p className="text-md">All endpoints require: <strong>x-rapidapi-key</strong> header and must be accessed via HTTPS.</p>

      {/* User Info Endpoint */}
      <section className="p-6 bg-white rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">/userInfo</h2>
        <p>Fetch Instagram user profile information.</p>

        <h3 className="text-xl font-semibold mt-4">Endpoint</h3>
        <code className="block bg-gray-100 p-3 rounded-md mt-2 text-sm">
          GET /userInfo?username=USERNAME&cookies=COOKIE
        </code>

        <h3 className="text-xl font-semibold mt-4">Query Parameters</h3>
        <table className="table-auto border-collapse border border-gray-300 text-sm w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Type</th>
              <th className="border border-gray-300 p-2">Required</th>
              <th className="border border-gray-300 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">username</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">Yes</td>
              <td>Instagram username to fetch profile data for</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">cookies</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">No</td>
              <td>Optional login cookies for private accounts</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold mt-4">Response Model</h3>
        <pre className="bg-gray-100 p-4 rounded-md text-xs overflow-auto">{`{
  "data": {
    "user": {
      "id": "123456789",
      "username": "example_user",
      "full_name": "Example User",
      "biography": "Sample bio",
      "biography_with_entities": { "raw_text": "Sample bio", "entities": [] },
      "bio_links": [{ "title": "Website", "url": "https://example.com" }],
      "external_url": "https://example.com",
      "profile_pic_url": "https://example.com/pic.jpg",
      "profile_pic_url_hd": "https://example.com/pic_hd.jpg",
      "edge_followed_by": { "count": 1200 },
      "edge_follow": { "count": 300 },
      "edge_owner_to_timeline_media": { "count": 50 },
      "is_private": false,
      "is_verified": true,
      "category_name": "Personal Blog",
      "business_category_name": null,
      "business_address_json": null,
      "highlight_reel_count": 5,
      "has_clips": true,
      "edge_related_profiles": { "edges": [] }
    }
  }
}`}</pre>
      </section>

      {/* Feed Endpoint */}
      <section className="p-6 bg-white rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">/feed</h2>
        <p>Retrieve user feed posts, including images, videos, carousel media, comments, and tagged users.</p>

        <h3 className="text-xl font-semibold mt-4">Endpoint</h3>
        <code className="block bg-gray-100 p-3 rounded-md mt-2 text-sm">
          GET /feed?userId=USER_ID&username=USERNAME&isPrivate=true|false&pagination_token=TOKEN
        </code>

        <h3 className="text-xl font-semibold mt-4">Headers</h3>
        <ul className="list-disc ml-6 text-sm space-y-1">
          <li><strong>x-rapidapi-key</strong>: Your RapidAPI key</li>
          <li><strong>Cookie</strong>: Optional session cookie</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Query Parameters</h3>
        <table className="table-auto border-collapse border border-gray-300 text-sm w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Type</th>
              <th className="border border-gray-300 p-2">Required</th>
              <th className="border border-gray-300 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">userId</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">Yes</td>
              <td>Instagram User ID</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">username</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">No</td>
              <td>Instagram username (optional)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">isPrivate</td>
              <td className="border border-gray-300 p-2">boolean</td>
              <td className="border border-gray-300 p-2">Yes</td>
              <td>Whether the user account is private</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">pagination_token</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">No</td>
              <td>Cursor for paginated results</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold mt-4">Response Model</h3>
        <pre className="bg-gray-100 p-4 rounded-md text-xs overflow-auto">{`{
  "data": {
    "items": [
      {
        "caption": { "text": "Post caption" },
        "carousel_media": [],
        "carousel_media_count": 2,
        "comment_count": 5,
        "image_versions": { "items": [{ "url": "https://example.com/img.jpg", "width": 1080, "height": 1080 }] },
        "is_pinned": false,
        "is_video": true,
        "like_count": 120,
        "video_view_count": 500,
        "video_play_count": 450,
        "video_duration": 12.5,
        "location": { "name": "Location Name", "short_name": "Loc" },
        "media_name": "media123",
        "play_count": 500,
        "share_count": 10,
        "taken_at": 1672342333,
        "thumbnail_url": "https://example.com/thumb.jpg",
        "video_url": "https://example.com/video.mp4",
        "comments": { "comment_list": [{ "text": "Nice post!", "created_at": 1672342400, "profile_pic_url": "https://example.com/user.jpg", "is_verified": "true", "username": "user123" }] },
        "tagged": { "taguser_list": [{ "id": 1, "full_name": "Tagged User", "profile_pic_url": "https://example.com/tagged.jpg", "is_verified": true, "username": "taggeduser" }] }
      }
    ]
  },
  "pagination_token": "NEXT_PAGE_TOKEN"
}`}</pre>
      </section>
      {/* Stories — Get User Stories */}
<section className="p-6 bg-white rounded-2xl shadow">
  <h2 className="text-2xl font-semibold mb-4">/story</h2>
  <p>Fetches Instagram stories of a user.</p>

  <h3 className="text-xl font-semibold mt-4">Endpoint</h3>
  <code className="block bg-gray-100 p-3 rounded-md mt-2 text-sm">
    GET /story?userId=USER_ID&isPrivate=true|false&cookie=COOKIE
  </code>

  <h3 className="text-xl font-semibold mt-4">Required Headers</h3>
  <ul className="list-disc ml-6 text-sm space-y-1">
    <li><strong>x-rapidapi-key</strong>: Your RapidAPI key (required)</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4">Query Parameters</h3>
  <table className="table-auto border-collapse border border-gray-300 text-sm">
    <thead>
      <tr className="bg-gray-200">
        <th className="border px-2 py-1">Parameter</th>
        <th className="border px-2 py-1">Type</th>
        <th className="border px-2 py-1">Required</th>
        <th className="border px-2 py-1">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-2 py-1">userId</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Instagram User ID</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">isPrivate</td>
        <td className="border px-2 py-1">boolean</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Specify if the account is private</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">cookie</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes for private</td>
        <td>Session cookie required for private accounts</td>
      </tr>
    </tbody>
  </table>

  <h3 className="text-xl font-semibold mt-4">Response Model</h3>
  <pre className="bg-gray-100 p-4 rounded-md text-xs overflow-auto">{`
{
  "reels": {
    "1234567890": {
      "id": "1234567890",
      "items": [
        {
          "taken_at": 1672342333,
          "video_versions": [
            { "url": "https://video_url", "id": "1", "width": 1080, "height": 1920, "type": 101 }
          ],
          "image_versions2": {
            "candidates": [
              { "url": "https://image_url", "width": 1080, "height": 1920 }
            ]
          },
          "cover_artwork_thumbnail_uri": "https://thumbnail_url"
        }
      ]
    }
  },
  "status": "ok"
}
  `}</pre>
</section>

{/* Highlight Tray Endpoint */}
<section className="p-6 bg-white rounded-2xl shadow">
  <h2 className="text-2xl font-semibold mb-4">/highlight</h2>
  <p>Fetch Instagram highlight trays for a user.</p>

  <h3 className="text-xl font-semibold mt-4">Endpoint</h3>
  <code className="block bg-gray-100 p-3 rounded-md mt-2 text-sm">
    GET /highlight?userId=USER_ID&isPrivate=true|false&cookie=COOKIE
  </code>

  <h3 className="text-xl font-semibold mt-4">Required Headers</h3>
  <ul className="list-disc ml-6 text-sm space-y-1">
    <li><strong>x-rapidapi-key</strong>: Your RapidAPI key (required)</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4">Query Parameters</h3>
  <table className="table-auto border-collapse border border-gray-300 text-sm w-full">
    <thead>
      <tr className="bg-gray-200">
        <th className="border px-2 py-1">Parameter</th>
        <th className="border px-2 py-1">Type</th>
        <th className="border px-2 py-1">Required</th>
        <th className="border px-2 py-1">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-2 py-1">userId</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Instagram User ID</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">isPrivate</td>
        <td className="border px-2 py-1">boolean</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Specify if the account is private</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">cookie</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">No</td>
        <td>Session cookie required for private accounts (optional)</td>
      </tr>
    </tbody>
  </table>

  <h3 className="text-xl font-semibold mt-4">Response Model</h3>
  <pre className="bg-gray-100 p-4 rounded-md text-xs overflow-auto">{`{
  "tray": [
    {
      "count": 10,
      "id": "highlight123",
      "highlightReelType": "story",
      "title": "My Highlights",
      "coverMedia": {
        "croppedImageVersion": {
          "url": "https://example.com/highlight_cover.jpg"
        }
      }
    }
  ]
}`}</pre>
</section>
{/* Highlight Inner Data Endpoint */}
<section className="p-6 bg-white rounded-2xl shadow">
  <h2 className="text-2xl font-semibold mb-4">/highlightinnerdata</h2>
  <p>Fetch videos from a specific Instagram highlight tray.</p>

  <h3 className="text-xl font-semibold mt-4">Endpoint</h3>
  <code className="block bg-gray-100 p-3 rounded-md mt-2 text-sm">
    GET /highlightinnerdata?highlightid=HIGHLIGHT_ID&isPrivate=true|false&cookie=COOKIE
  </code>

  <h3 className="text-xl font-semibold mt-4">Required Headers</h3>
  <ul className="list-disc ml-6 text-sm space-y-1">
    <li><strong>x-rapidapi-key</strong>: Your RapidAPI key (required)</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4">Query Parameters</h3>
  <table className="table-auto border-collapse border border-gray-300 text-sm w-full">
    <thead>
      <tr className="bg-gray-200">
        <th className="border px-2 py-1">Parameter</th>
        <th className="border px-2 py-1">Type</th>
        <th className="border px-2 py-1">Required</th>
        <th className="border px-2 py-1">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-2 py-1">highlightid</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes</td>
        <td>ID of the highlight tray to fetch videos from</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">isPrivate</td>
        <td className="border px-2 py-1">boolean</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Specify if the account is private</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">cookie</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">No</td>
        <td>Session cookie for private accounts (optional)</td>
      </tr>
    </tbody>
  </table>

  <h3 className="text-xl font-semibold mt-4">Response Model</h3>
  <pre className="bg-gray-100 p-4 rounded-md text-xs overflow-auto">{`{
  "highlightvideos": [
    {
      "src": "https://example.com/video1.mp4",
      "takenattime": "1672342333",
      "type": "video"
    },
    {
      "src": "https://example.com/video2.mp4",
      "takenattime": "1672342400",
      "type": "video"
    }
  ]
}`}</pre>
</section>
{/* Download Post Endpoint */}
<section className="p-6 bg-white rounded-2xl shadow">
  <h2 className="text-2xl font-semibold mb-4">/posts</h2>
  <p>Download a specific Instagram post, including images, videos, carousel media, comments, and tagged users.</p>

  <h3 className="text-xl font-semibold mt-4">Endpoint</h3>
  <code className="block bg-gray-100 p-3 rounded-md mt-2 text-sm">
    GET /posts?feedid=FEED_ID&userId=USER_ID&isPrivate=true|false&cookie=COOKIE
  </code>

  <h3 className="text-xl font-semibold mt-4">Required Headers</h3>
  <ul className="list-disc ml-6 text-sm space-y-1">
    <li><strong>x-rapidapi-key</strong>: Your RapidAPI key (required)</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4">Query Parameters</h3>
  <table className="table-auto border-collapse border border-gray-300 text-sm w-full">
    <thead>
      <tr className="bg-gray-200">
        <th className="border px-2 py-1">Parameter</th>
        <th className="border px-2 py-1">Type</th>
        <th className="border px-2 py-1">Required</th>
        <th className="border px-2 py-1">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-2 py-1">feedid</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes</td>
        <td>ID of the post to download</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">userId</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">No</td>
        <td>Instagram user ID (optional)</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">isPrivate</td>
        <td className="border px-2 py-1">boolean</td>
        <td className="border px-2 py-1">No</td>
        <td>Specify if the account is private</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">cookie</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">No</td>
        <td>Session cookie for private accounts (optional)</td>
      </tr>
    </tbody>
  </table>

  <h3 className="text-xl font-semibold mt-4">Response Model</h3>
  <pre className="bg-gray-100 p-4 rounded-md text-xs overflow-auto">{`{
  "data": {
    "items": [
      {
        "caption": { "text": "Post caption" },
        "carousel_media": [],
        "carousel_media_count": 2,
        "comment_count": 5,
        "image_versions": { "items": [{ "url": "https://example.com/img.jpg", "width": 1080, "height": 1080 }] },
        "is_pinned": false,
        "is_video": true,
        "like_count": 120,
        "video_view_count": 500,
        "video_play_count": 450,
        "video_duration": 12.5,
        "location": { "name": "Location Name", "short_name": "Loc" },
        "media_name": "media123",
        "play_count": 500,
        "share_count": 10,
        "taken_at": 1672342333,
        "thumbnail_url": "https://example.com/thumb.jpg",
        "video_url": "https://example.com/video.mp4",
        "comments": { "comment_list": [{ "text": "Nice post!", "created_at": 1672342400, "profile_pic_url": "https://example.com/user.jpg", "is_verified": "true", "username": "user123" }] },
        "tagged": { "taguser_list": [{ "id": 1, "full_name": "Tagged User", "profile_pic_url": "https://example.com/tagged.jpg", "is_verified": true, "username": "taggeduser" }] }
      }
    ]
  },
  "pagination_token": "NEXT_PAGE_TOKEN"
}`}</pre>
</section>
{/* Followers / Following Endpoint */}
<section className="p-6 bg-white rounded-2xl shadow">
  <h2 className="text-2xl font-semibold mb-4">/followers (or /following)</h2>
  <p>Retrieve the list of followers or following users for a specific Instagram account.</p>

  <h3 className="text-xl font-semibold mt-4">Endpoint</h3>
  <code className="block bg-gray-100 p-3 rounded-md mt-2 text-sm">
    GET /followers?userId=USER_ID&username=USERNAME&isPrivate=true|false&whichurl=follower|following&pagination_token=TOKEN
  </code>

  <h3 className="text-xl font-semibold mt-4">Required Headers</h3>
  <ul className="list-disc ml-6 text-sm space-y-1">
    <li><strong>x-rapidapi-key</strong>: Your RapidAPI key (required)</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4">Query Parameters</h3>
  <table className="table-auto border-collapse border border-gray-300 text-sm w-full">
    <thead>
      <tr className="bg-gray-200">
        <th className="border px-2 py-1">Parameter</th>
        <th className="border px-2 py-1">Type</th>
        <th className="border px-2 py-1">Required</th>
        <th className="border px-2 py-1">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-2 py-1">userId</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Instagram User ID</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">username</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Instagram username</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">isPrivate</td>
        <td className="border px-2 py-1">boolean</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Specify if the account is private</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">whichurl</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Specify "follower" or "following" to get respective list</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">pagination_token</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">No</td>
        <td>Cursor for paginated results</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">cookie</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">No</td>
        <td>Session cookie for private accounts (optional)</td>
      </tr>
    </tbody>
  </table>

  <h3 className="text-xl font-semibold mt-4">Response Model</h3>
  <pre className="bg-gray-100 p-4 rounded-md text-xs overflow-auto">{`{
  "data": {
    "items": [
      {
        "id": "123456789",
        "full_name": "Example User",
        "username": "example_user",
        "profile_pic_url": "https://example.com/pic.jpg",
        "is_private": false,
        "verified": true
      }
    ]
  }
}`}</pre>
</section>
{/* Follow Check Endpoint */}
<section className="p-6 bg-white rounded-2xl shadow">
  <h2 className="text-2xl font-semibold mb-4">/followcheck</h2>
  <p>Check if a user is following another account and get basic profile stats.</p>

  <h3 className="text-xl font-semibold mt-4">Endpoint</h3>
  <code className="block bg-gray-100 p-3 rounded-md mt-2 text-sm">
    GET /followcheck?userId=USER_ID&username=USERNAME&isPrivate=true|false&cookie=COOKIE
  </code>

  <h3 className="text-xl font-semibold mt-4">Required Headers</h3>
  <ul className="list-disc ml-6 text-sm space-y-1">
    <li><strong>x-rapidapi-key</strong>: Your RapidAPI key (required)</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4">Query Parameters</h3>
  <table className="table-auto border-collapse border border-gray-300 text-sm w-full">
    <thead>
      <tr className="bg-gray-200">
        <th className="border px-2 py-1">Parameter</th>
        <th className="border px-2 py-1">Type</th>
        <th className="border px-2 py-1">Required</th>
        <th className="border px-2 py-1">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-2 py-1">userId</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Instagram User ID of the account to check</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">username</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Username of the account to check</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">isPrivate</td>
        <td className="border px-2 py-1">boolean</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Specify if the account is private</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">cookie</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes for private accounts</td>
        <td>Session cookie for private accounts</td>
      </tr>
    </tbody>
  </table>

  <h3 className="text-xl font-semibold mt-4">Response Model</h3>
  <pre className="bg-gray-100 p-4 rounded-md text-xs overflow-auto">{`{
  "following": true,
  "is_private": false,
  "username": "example_user",
  "postcount": 50,
  "followingcount": 300,
  "followerscount": 1200,
  "highlightcount": 5,
  "logout": false
}`}</pre>
</section>
{/* Story Tray Endpoint */}
<section className="p-6 bg-white rounded-2xl shadow">
  <h2 className="text-2xl font-semibold mb-4">/storytray</h2>
  <p>Fetches the story tray of a user, including media details and seen count.</p>

  <h3 className="text-xl font-semibold mt-4">Endpoint</h3>
  <code className="block bg-gray-100 p-3 rounded-md mt-2 text-sm">
    GET /storytray?userId=USER_ID&isPrivate=true|false&cookie=COOKIE
  </code>

  <h3 className="text-xl font-semibold mt-4">Required Headers</h3>
  <ul className="list-disc ml-6 text-sm space-y-1">
    <li><strong>x-rapidapi-key</strong>: Your RapidAPI key (required)</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4">Query Parameters</h3>
  <table className="table-auto border-collapse border border-gray-300 text-sm w-full">
    <thead>
      <tr className="bg-gray-200">
        <th className="border px-2 py-1">Parameter</th>
        <th className="border px-2 py-1">Type</th>
        <th className="border px-2 py-1">Required</th>
        <th className="border px-2 py-1">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-2 py-1">userId</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Instagram User ID</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">isPrivate</td>
        <td className="border px-2 py-1">boolean</td>
        <td className="border px-2 py-1">Yes</td>
        <td>Specify if the account is private</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">cookie</td>
        <td className="border px-2 py-1">string</td>
        <td className="border px-2 py-1">Yes for private accounts</td>
        <td>Session cookie required for private accounts</td>
      </tr>
    </tbody>
  </table>

  <h3 className="text-xl font-semibold mt-4">Response Model</h3>
  <pre className="bg-gray-100 p-4 rounded-md text-xs overflow-auto">{`{
  "storytraylist": [
    {
      "seen": 10,
      "mediaCount": 5,
      "hasVideo": true,
      "mediaIds": ["123", "456", "789"],
      "username": "example_user",
      "profilePicUrl": "https://example.com/pic.jpg",
      "userId": "123456789",
      "is_verified": true
    }
  ]
}`}</pre>
</section>

    </div>
  );
}
