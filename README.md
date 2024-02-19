# Title
Idea: enhanced UX for rankings (?)

# Description

Feature request for implementation of a new statistical indicator by changing an existing widget and/or creating a new one with a progress plot.

##  Problem
It is impossible to find out the student's current position from the home page. On the home page in the <kbd>Your Stats</kbd> card there is no information about the rating, only points. Using them you cannot find out your place in the standings of our special Olympiad :3.  

The additional action of going to the overall rating tab is required. But this still does not make it clear that the rating has up or down if the user did not remember the previous result.
There is no ranking history, which complicates the student’s self-assessment and does not provide a clear understanding of progress and fulfillment of the condition (70% of the best student).

## Objectives

*  Improved User Experience: more visual control
*  Accent on milestone: measurable and simple indicators to support motivation
*  Progress history: where we were and where we are

## Detailed Description

My ideas for enhancing the interface consist of several points:

1. On the Home page, add a position metric to the “Your Stats” <kbd>ant-card</kbd> same as in the Dashboard.
2. On the Dashboard in the “Your stats”'s <kbd>ant-card</kbd> add an indicator of changes in position in the overall rating hereinafter referred to as “delta”.
    1. Delta has a numerical expression for more precise measurement.
    2. Delta can be a different color (gray/green/red) depending on the sign of the number.
    3. [Optional] Delta can be supplemented with an icon that visually displays the sign of the number. ![image](https://github.com/ksarise/rsschool-app__delta/assets/18985111/c32ab51e-2e35-4d0f-975f-c7b65c76c318)
       
       
        * It would be more logical to use Ant-design icons: 
          * <kbd>MinusOutlined</kbd> for zero delta
          * <kbd>CaretUpFilled</kbd> for positive delta
          * <kbd>CaretDownFilled</kbd> for negative delta
          
    But I've already found other free icons and I love them, whatever.  
  
  3. On the Dashboard create an additional “statistics” widget , which is a container for a  graph of position history
      1. The graph (<kbd>Line plot</kbd>) is implemented by already used library <kbd>@antv/g2plot</kbd>.
      2. The graph displays the exact position of the student(Oy) at a specific time measure(Ox).
          * I suggest course week number as a time measure because it gives sufficient information and optimizes the number of items stored in the database.
      3. [Optional] Displaying amount of points in a specific week when selecting a graph point
      4. [Optional] <kbd>Annotations: line</kbd> showing the 70% limit relative to the best student's performance each week. Along with informative <kbd>annotations: text</kbd>
      5. [Optional] Applying an <kbd>annotations: regional filter</kbd> when a graph intersects a border line.

## Possible Implementation

Using the original design i tried to show a potential implementation of delta and progress graph
In my mind it might look something like this: ![image](https://github.com/ksarise/rsschool-app__delta/assets/18985111/c97ad3ea-4d9e-4d43-a924-df4841f0fe95)


And [Deploy](https://ksarise.github.io/rsschool-app__delta/)

## Build
[Project source](https://github.com/ksarise/rsschool-app__delta)  

I used <kbd>@opd/g2plot-react</kbd> instead of <kbd>@antv/g2plot</kbd> because I had problems with deployment on pages.
But the API is common, so there is not much difference.  

Also, after deployment, the endless loop stopped working, annotations are not displayed. 
But I'm just getting to know React and my paws are so little.

### Bonus idea

Add achievements for outstanding promotion in the ranking, or vice versa, persistent presence within high positions.
For example:
* For promotion to more than 1000 ranks (excluding first month) - badge "High-rise climbing"
* Stayed in the top 100 for the entire course - badge "Hard-Boiled"
  and etc.